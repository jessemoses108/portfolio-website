// sections/Navbar/Navbar.jsx
import { useState } from "react";
import NavLink from "../../components/NavLink/NavLink";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import "./Navbar.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ activeSection = "Home" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <p className="navbar__logo">BlackSail</p>

        {/* Desktop nav: hidden on mobile via CSS */}
        <nav className="navbar__links" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              isActive={activeSection === item.label}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Theme toggle + mobile hamburger, grouped on the right */}
        <div className="navbar__actions">
          <ThemeToggle />
          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="navbar__toggle-icon" aria-hidden="true" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-nav"
          className="navbar__mobile-links"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              isActive={activeSection === item.label}
              onClick={handleLinkClick}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
