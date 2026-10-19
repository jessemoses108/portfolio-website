// components/SkillsSection.jsx
import './skills.css'
import SkillCard from '@/components/SkillCard/SkillCard';
import { skillGroups } from '@/data/skills';

export default function SkillsSection() {
  return (
    <section className="skills-section" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="skills-section__title">
        Skills &amp; Technologies
      </h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <SkillCard
            key={group.category}
            category={group.category}
            skills={group.skills}
          />
        ))}
      </div>
    </section>
  );
}
