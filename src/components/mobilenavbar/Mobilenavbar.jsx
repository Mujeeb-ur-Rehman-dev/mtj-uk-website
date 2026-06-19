import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './mobilenavbar.css'

const links = [
  { name: "Religious Giving", path: "/home", submenu:[{name:'Zakat'}, {name:'Sadaqah'}, {name:'Ration Program'}, {name:'Automated Giving'}] },
  {name:"Emergencies", submenu:[{name:'Emergency Relief-Lebanon'}, {name:'Palestine Relief'}, {name:'Sri Lanka Floods'}]},
  {name:"Support Campaigns", submenu:[{name:'Apna Ghar'}, {name:'Medical care / Health'}, {name:'Food Relief'}, {name:'KASB'}, {name:'Hot Meals'}, {name:'Education'}, {name:'Clean Water'}]},
  {name:"Who We Are", submenu:[{name:'Blogs'}, {name:'Reports'}, {name:'About Us'}, {name:'Our Team'}]},
  {name:"Get Involved", submenu:[{name:'Volunteer'},{name:'Events'}, {name:'Careers'}, {name:'Contact Us'}]}
];


const Mobilenavbar = () => {
     const [visible, setVisible] = useState(false);
     const [activeLink, setActiveLink] = useState("Home");
     const [expandedSubmenu, setExpandedSubmenu] = useState(null);
     const location = useLocation();

     useEffect(() => {
       const currentPath = location.pathname.trim();
       const matchedItem = links.find(item => {
        //  const itemPath = item.path.trim();
        const itemPath = item.path?.trim() || "";
         const isHome =
           (currentPath === '/' || currentPath === '/home') &&
           item.name === 'Home';
         const isExactMatch = currentPath === itemPath;
         const isProjectSubRoute =
           itemPath === '/projects' &&
           currentPath.startsWith('/projects/');
         const isAppealsSubRoute =
           itemPath === '/appeals' &&
           currentPath.startsWith('/appeals/');
         return isHome || isExactMatch || isProjectSubRoute || isAppealsSubRoute;
       });
       setActiveLink(matchedItem ? matchedItem.name : "Home");
     }, [location.pathname]);

     const handleLinkClick = (linkName, path) => {
       setActiveLink(linkName);
       const burger = document.querySelector(".hamburger.open");
       if (burger) burger.click();
     };

     const handleSubmenuToggle = (itemName) => {
       setExpandedSubmenu((prev) => (prev === itemName ? null : itemName));
     };

  useEffect(() => {
    const onToggle = (e) => {
      if (e && e.detail && typeof e.detail.isOpen === "boolean") {
        setVisible(e.detail.isOpen);
        if (!e.detail.isOpen) setExpandedSubmenu(null);
      }
    };

    window.addEventListener("mobile-menu-toggle", onToggle);
    return () => window.removeEventListener("mobile-menu-toggle", onToggle);
  }, []);

  if (!visible) return null;

  return (
    <div className='mbl lg:d-none md:d-block sm:d-block'>
       <ul className='text-white'>
        {links.map((item) => (
          <li key={item.name}>
            {item.submenu ? (
              <>
                <button
                  type="button"
                  className={`mbl-nav-trigger ${activeLink === item.name ? "active" : ""}`}
                  onClick={() => handleSubmenuToggle(item.name)}
                  aria-expanded={expandedSubmenu === item.name}
                >
                  {item.name}
                </button>
                {expandedSubmenu === item.name && (
                  <ul className="mbl-submenu">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          // to={subItem.path}
                          className={activeLink === subItem.name ? "active" : ""}
                          // onClick={() => handleLinkClick(subItem.name)}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                // to={item.path}
                className={activeLink === item.name ? "active" : ""}
                // onClick={() => handleLinkClick(item.name)}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Mobilenavbar