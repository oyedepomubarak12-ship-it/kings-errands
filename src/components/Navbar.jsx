
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Package,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import "./Navbar.css";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Business Logistics", to: "/business-logistics" },
  { label: "Delivery Plans", to: "/delivery-plans" },
  { label: "Track Delivery", to: "/track-delivery" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-brand"
          aria-label="Kings Errands and Logistics home"
          onClick={closeMenu}
        >
          <span className="navbar-logo">
            <Package size={25} strokeWidth={2.2} />
          </span>

          <span className="navbar-brand-copy">
            <strong>KINGS</strong>
            <small>ERRANDS & LOGISTICS</small>
          </span>
        </Link>

        <button
          className="navbar-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          id="primary-navigation"
          className={`navbar-links ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `navbar-link${isActive ? " active" : ""}`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `navbar-link navbar-faq-link${isActive ? " active" : ""}`
            }
            onClick={closeMenu}
          >
            FAQ
          </NavLink>

          <Link
            to="/request-quote"
            className="navbar-quote-button"
            onClick={closeMenu}
          >
            Request a Quote
            <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
