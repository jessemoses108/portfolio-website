// src/sections/Experience/Experience.jsx
import './Experience.css'
import TimelineItem from "../../components/TimelineItem/TimelineItem";

const experience = [
  {
    year: '2023',
    role: 'Front End Developer',
    company: 'Tech Corp Solutions',
    description: 'Led development of enterprise scale web applications using React and Node.js. Mentored junior developers and established best practice coding standards.',
  },
  {
    year: '2021',
    role: 'Front End Developer',
    company: 'Creative Apps Studio',
    description: 'Built and maintained responsive mobile-first SaaS products. Collaborated closely with product designers to implement pixel perfect layouts.',
  },
];

export default function ExperienceSection() {
  return (
    <section className="experience-section" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="experience-section__title">Experience</h2>
      <ol className="timeline">
        {experience.map((item) => (
          <TimelineItem key={item.year} {...item} />
        ))}
      </ol>
    </section>
  );
}