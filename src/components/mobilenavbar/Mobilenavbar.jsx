import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../common/components/buttons/Button";
import './mobilenavbar.css'

const links = [
  { name: "Religious Giving", submenu:[{name:'Zakat', path:'/zakat'}, {name:'Sadaqah', path:'/sadaqah'}, {name:'Ration Program', path:'/ration-program'}, {name:'Automated Giving', path:'/automated-giving'}] },
  { name:"Emergencies", submenu:[{name:'Emergency Relief-Lebanon', path:'/emergency-relief-lebanon'}, {name:'Palestine Relief', path:'/palestine-relief'}, {name:'Sri Lanka Floods', path:'/sri-lanka-floods'}]},
  { name:"Support Campaigns", submenu:[{name:'Apna Ghar', path:'/apna-ghar'}, {name:'Medical care / Health', path:'/medical-care-health'}, {name:'Food Relief', path:'/food-relief'}, {name:'KASB', path:'/kasb'}, {name:'Hot Meals', path:'/hot-meals'}, {name:'Education', path:'/education'}, {name:'Clean Water', path:'/clean-water'}]},
  { name:"Who We Are", submenu:[{name:'Blogs', path:'/blogs'}, {name:'Reports', path:'/reports'}, {name:'About Us', path:'/about-us'}, {name:'Our Team', path:'/our-team'}]},
  { name:"Get Involved", submenu:[{name:'Volunteer', path:'/volunteer'},{name:'Events', path:'/events'}, {name:'Careers', path:'/careers'}, {name:'Contact Us', path:'/contact-us'}]}
];

const Mobilenavbar = () => {
  const [visible, setVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [expandedSubmenu, setExpandedSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.trim();
    const matchedItem = links.find(item => {
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

  const handleLinkClick = (linkName) => {
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
  <div className="mbl">
    <div className="mbl-nav-list">
      <ul className="text-white">
        {links.map((item) => (
          <li key={item.name}>
            {item.submenu ? (
              <>
                <button
                  type="button"
                  className={`mbl-nav-trigger ${activeLink === item.name ? "active" : ""}`}
                  onClick={() => {
                    console.log("CLICKED:", item.name);
                    setExpandedSubmenu((prev) => (prev === item.name ? null : item.name));
                  }}
                >
                  <span>{item.name}</span>
                  <span className={`mbl-nav-arrow ${expandedSubmenu === item.name ? "open" : ""}`}>
                    ↓
                  </span>
                </button>

                {expandedSubmenu === item.name && (
                  <ul className="mbl-submenu">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          to={subItem.path}
                          className={activeLink === subItem.name ? "active" : ""}
                          onClick={() => handleLinkClick(subItem.name)}
                        >
                          <span>{subItem.name}</span>
                          <span className="mbl-submenu-arrow">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                to={item.path}
                className={activeLink === item.name ? "active" : ""}
                onClick={() => handleLinkClick(item.name)}
              >
                <span>{item.name}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>

    <div className="mbl-donate">
      <Button
        text="🤍  Donate Now"
        wrapperClass="mbl-donate-group"
        buttonClass="btn btn-donate-animated mbl-donate-btn"
      />
    </div>
  </div>
);
};

export default Mobilenavbar;