// components/ProjectCard.jsx
import './ProjectCard.css'
import Button from "@/components/Button/Button";
import Tag from "@/components/Tag/Tag";
import IconCircleButton from "@/components/IconCircleButton/IconCircleButton";
import GithubIcon from '../../icons/GithubIcon';
import ExternalLinkIcon from '../../icons/ExternalLinkIcon';

export default function ProjectCard({
  title,
  description,
  thumbnailUrl,
  techStack,
  detailsUrl,
  githubUrl,
  liveUrl,
}) {
  return (
    <article className="project-card">
      <img
        src={thumbnailUrl}
        alt={`${title} project thumbnail`}
        className="project-card__thumbnail"
      />

      <div className="project-card__content">
        <header className="project-card__header">
          <h3 className="project-card__title">{title}</h3>
          <p className="project-card__description">{description}</p>
        </header>

        <ul className="project-card__tags" aria-label="Technologies used">
          {techStack.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>

        <div className="project-card__actions">
          <a href={detailsUrl}>
            <Button variant="primary">View Details</Button>
          </a>
          <div className="project-card__socials">
            <IconCircleButton
              icon={GithubIcon}
              label={`${title} GitHub repository`}
              href={githubUrl}
            />
            <IconCircleButton
              icon={ExternalLinkIcon}
              label={`${title} live site`}
              href={liveUrl}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
