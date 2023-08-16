import {useState, useEffect, useRef} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navSheet.css';

function BasicExample() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const checkboxRef = useRef(null);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    checkboxRef.current.checked = !menuOpen; // Update the checkbox state
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false); // Close the menu when a menu item is clicked
    checkboxRef.current.checked = false; // Uncheck the checkbox
  };


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
        checkboxRef.current.checked = false; 
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <nav className={`myNavBar ${menuOpen ? 'open' : ''}`} ref={navRef}>
      <div className="container hope">
        <Link to="/" className="logo-link">
          <img src="./charity-svgrepo-com.svg" alt="logo" className="logo" />
        </Link>
        <input
          type="checkbox"
          id="navbar-toggle"
          className="navbar-toggle"
          ref={checkboxRef}
          onClick={() => setMenuOpen(!menuOpen)} 
        />
        <label htmlFor="navbar-toggle" className="navbar-toggle-label">
          &#9776;
        </label>
        <ul className="main-nav">
          <li>
            <NavLink exact to="/" className="nav-link" activeClassName="active" onClick={handleMenuItemClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link" activeClassName="active" onClick={handleMenuItemClick}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className="nav-link" activeClassName="active" onClick={handleMenuItemClick}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className="nav-link" activeClassName="active"onClick={handleMenuItemClick}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className="nav-link" activeClassName="active" onClick={handleMenuItemClick}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/volunteer" className="nav-link" activeClassName="active" onClick={handleMenuItemClick}>
              Volunteer
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={handleMenuItemClick}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="https://p.hbtl.co/9RhYWd" className="nav-link" id="donate-special" activeClassName="active" onClick={handleMenuItemClick}>
              Donate
            </NavLink>
          </li>
        </ul>
        <Link to="https://p.hbtl.co/9RhYWd" target="_blank">
          <button className="butt">Donate Now 💛</button>
        </Link>
      </div>
    </nav>
  );
}

export default BasicExample;
