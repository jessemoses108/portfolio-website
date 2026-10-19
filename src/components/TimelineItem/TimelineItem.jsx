// components/TimelineItem.jsx
import "./TimelineItem.css"

export default function TimelineItem({ year, role, company, description }) {
  return (
    <li className="timeline-item">
      <div className="timeline-item__indicator">
        <span className="timeline-item__badge">{year}</span>
      </div>
      <div className="timeline-item__card">
        <div className="timeline-item__header">
          <h3 className="timeline-item__role">{role}</h3>
          <p className="timeline-item__company">at {company}</p>
        </div>
        <p className="timeline-item__description">{description}</p>
      </div>
    </li>
  );
}
