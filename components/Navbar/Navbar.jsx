import { NavLink } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.css";

const navLinks = [
  {
    id: 1,
    title: "Home",
    path: "/",
    mobileHidden: false,
  },
  {
    id: 2,
    title: "Products",
    path: "/products",
    mobileHidden: false,
  },
  {
    id: 3,
    title: "About",
    path: "/about",
    mobileHidden: true,
  },
  {
    id: 4,
    title: "Cart",
    path: "/cart",
    icon: "bi-cart3",
    mobileHidden: false,
  },
  {
    id: 5,
    title: "Login",
    path: "/login",
    icon: "bi-person-circle",
    mobileHidden: false,
  },
];

const Navbar = () => {
  return (
    <nav className="main-navbar">
      {/* Logo */}

      <div className="navbar-logo">
        <NavLink to="/">
          <span className="logo-c">C</span>art
          <span className="logo-v">V</span>erse
        </NavLink>
      </div>

      {/* Search */}

      <div className="navbar-search">
        <i className="bi bi-search navbar-search-icon"></i>

        <input
          type="text"
          className="navbar-search-input"
          placeholder="Search products..."
        />
      </div>

      {/* Navigation */}

      <div className="navbar-menu">
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              `navbar-menu-link ${link.mobileHidden ? "about-link" : ""} ${
                isActive ? "active-link" : ""
              }`
            }
          >
            {link.icon && <i className={`bi ${link.icon}`}></i>}

            <span>{link.title}</span>
          </NavLink>
        ))}

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
