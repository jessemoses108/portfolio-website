// components/NavLink.jsx
import './NavLink.css'

export default function NavLink({ href, children, isActive, onClick }) {
  return (
    
    <a
      href={href}
      className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
    >
      {children}
    </a>
  );
}