import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Products",
    path: "/products",
  },
  {
    id: 3,
    title: "About",
    path: "/about",
  },
];

const Navbar = () => {
  return (
    <nav className="main-navbar">
      {/* Logo */}

      <div className="navbar-logo">
        <NavLink to="/">CartVerse</NavLink>
      </div>

      {/* Search */}

      <div className="navbar-search">
        <i className="bi bi-search navbar-search-icon"></i>

        <input
          className="navbar-search-input"
          type="text"
          placeholder="Search products..."
        />
      </div>

      {/* Navigation */}

      <div className="navbar-links">
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              isActive ? "navbar-link active-link" : "navbar-link"
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>

      {/* Right Section */}

      <div className="navbar-actions">
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "navbar-action-link active-link" : "navbar-action-link"
          }
        >
          <i className="bi bi-cart3"></i>

          <span>Cart</span>
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "navbar-action-link active-link" : "navbar-action-link"
          }
        >
          <i className="bi bi-person-circle"></i>

          <span>Login</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;