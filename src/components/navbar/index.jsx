import {useState, useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcDonate } from 'react-icons/fc'
import './index.css' 
import Hamburger from '../hamburgermenu/Hamburger'
import Mobilenavbar from '../mobilenavbar/Mobilenavbar' 
import logo from '../../assets/img/logos/only_logo.png'
import Button from '../../common/components/buttons/Button';

// Navigation items mapping
const navItems = [
  { name: "Religious Giving", path: "/home", submenu:[{name:'Zakat'}, {name:'Sadaqah'}, {name:'Ration Program'}, {name:'Automated Giving'}] },
  {name:"Emergencies", submenu:[{name:'Emergency Relief-Lebanon'}, {name:'Palestine Relief'}, {name:'Sri Lanka Floods'}]},
  {name:"Support Campaigns", submenu:[{name:'Apna Ghar'}, {name:'Medical care / Health'}, {name:'Food Relief'}, {name:'KASB'}, {name:'Hot Meals'}, {name:'Education'}, {name:'Clean Water'}]},
  {name:"Who We Are", submenu:[{name:'Blogs'}, {name:'Reports'}, {name:'About Us'}, {name:'Our Team'}]},
  {name:"Get Involved", submenu:[{name:'Volunteer'},{name:'Events'}, {name:'Careers'}, {name:'Contact Us'}]}
];

const Navbar = () => {
   const [activeLink, setActiveLink] = useState("Home");
   const location = useLocation();
   const navigate = useNavigate();
   // const observerRef = useRef(null);
   
   // Always use white background for all states
   const [isLightTheme, setIsLightTheme] = useState(false);

   // Update active link based on current route
   useEffect(() => {
     const currentPath = location.pathname.trim();
     
     // Check each nav item to see if current path matches
    const matchedItem = navItems.find(item => {
      // const itemPath = item.path.trim();
      const itemPath = item?.path?.trim() || "";
      const isHome =
        (currentPath === '/' || currentPath === '/home') &&
        item.name === 'Home';
      const isExactMatch =
        currentPath === itemPath || currentPath === itemPath + ' ';
      const isProjectDetail =
        itemPath === '/projects' &&
        currentPath.startsWith('/projects/');
      const isAppealsDetail =
        itemPath === '/appeals' &&
        currentPath.startsWith('/appeals/');
      return isHome || isExactMatch || isProjectDetail || isAppealsDetail;
    });
     
     if (matchedItem) {
       setActiveLink(matchedItem.name);
     } else {
       // Default to Home if no match found
       setActiveLink("Home");
     }
   }, [location.pathname]);

  const handleClick = (linkName, path) => {
    // Scroll to top on current page first
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setActiveLink(linkName);
    
    // Wait for scroll to complete, then navigate
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        navigate(path);
      });
    });
  };

  const scrollToDonationForm = () => {
    // Try multiple selectors to find the donation form
    const donationForm = document.querySelector('.donation-form') || 
                        document.querySelector('.donation-form-card') ||
                        document.querySelector('[class*="donation-form"]');
    
    if (donationForm) {
      donationForm.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      
      // Focus on the form for better accessibility
      const firstInput = donationForm.querySelector('input, select, button');
      if (firstInput) {
        setTimeout(() => {
          firstInput.focus();
        }, 500);
      }
    } else {
      // If form not found (lazy loading), retry after a delay
      setTimeout(() => {
        scrollToDonationForm();
      }, 300);
    }
  };
  return (
    <>
    <div className="nav-outer">
    <div className={`nav-container rounded ${isLightTheme ? 'nav-light-theme' : 'nav-dark-theme'}`}>
        <div className='nav-row-1'>
            {/* logo section */}
            <div className='flex items-center logo_section'>
                <div className='logo'>
                  <Link to="/home">
                    <img src={logo} alt='logo' />
                  </Link>
                </div>
            </div>
            {/* menu section - desktop only */}
            <div className='d-none md:d-block' style={{fontSize:'1.3vw', fontWeight:'bold'}}>
              <ul className={`hvr flex gap-24 ${isLightTheme ? 'text-white' : 'text-dark'}`}>
                 {navItems.map((item) => (
                <li key={item.name} className={`nav-item ${item.submenu ? 'nav-item-has-sub' : ''}`}>
                  <Link
                    className={activeLink === item.name ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.name, item.path);
                    }}
                    to={item.path}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <ul className="nav-submenu">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            to={subItem.path}
                            className={activeLink === subItem.name ? "active" : ""}
                            onClick={(e) => {
                              e.preventDefault();
                              handleClick(subItem.name, subItem.path);
                            }}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              </ul>
            </div>

            {/* button section - desktop */}
            <div className=' d-none md:d-flex'>
              <Button/>
            </div>
            <div className='md:d-none'>
              <Hamburger/>
            </div>
        </div>
      </div>
    </div>
           <div>
            <Mobilenavbar/>
           </div>
           </>
         
  )
}
export default Navbar
