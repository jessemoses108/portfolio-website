import './IconCircleButton.css'

export default function IconCircleButton({ icon: Icon, label, href, size = 'md' }) {
  return (
    <a href={href} 
      className={`icon-circle-btn icon-circle-btn--${size}`} 
      aria-label={label} 
      target="_blank" 
      rel="noopener noreferrer">
      <Icon aria-hidden="true" focusable="false" />
    </a>
  );
}