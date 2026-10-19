// components/SkillCard.jsx
import './SkillCard.css'
import Tag from "../Tag/Tag"; 

export default function SkillCard({ category, skills }) {
  return (
    <div className="skill-card">
      <h3 className="skill-card__title">{category}</h3>
      <ul className="skill-card__tags" aria-label={`${category} skills`}>
        {skills.map((skill) => (
          <li key={skill}>
            <Tag>{skill}</Tag>
          </li>
        ))}
      </ul>
    </div>
  );
}
