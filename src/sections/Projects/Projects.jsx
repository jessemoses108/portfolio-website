// components/ProjectsGrid.jsx
//src\components\ProjectCard
import './Projects.css'
import ProjectCard from "../../components/ProjectCard/ProjectCard";


const COLUMNS = 6;
const CARDS_PER_ROW = 3;

// Work out how many cards share this card's row, then split the 6 columns evenly.
// 3 in a row -> span 2, 2 in a row -> span 3, 1 in a row -> span 6
function getCardSpan(index, total) {
  const rowStart = Math.floor(index / CARDS_PER_ROW) * CARDS_PER_ROW;
  const cardsInRow = Math.min(CARDS_PER_ROW, total - rowStart);
  return COLUMNS / cardsInRow;
}

export default function ProjectsGrid({ projects }) {
  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="projects-section__intro">
        <h2 id="projects-heading" className="projects-section__title">
          My Projects
        </h2>
        <p className="projects-section__subtitle">
          A collection of projects I've worked on, ranging from landing pages to
          simple web apps
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="projects-grid__item"
            style={{ "--card-span": getCardSpan(index, projects.length) }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
