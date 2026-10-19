// sections/AboutMe/AboutMe.jsx
import './AboutMe.css'
import PixelCat from "../../components/PixelCat/PixelCat";

export default function AboutMe() {
  return (
    <section className="about-me" id="about" aria-labelledby="about-heading">
      <div className="about-me__text">
        <h2 id="about-heading" className="about-me__heading">
          About Me
        </h2>
        <div className="about-me__paragraphs">
          <p>
            I'm a passionate creative developer and designer with over 5 years
            of experience building digital products that users love. I believe
            in the power of good design and clean code to solve real problems.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new design trends,
            contributing to open-source projects, or sharing my knowledge
            through writing and speaking at conferences.
          </p>
          <p>
            I'm always excited to work on projects that challenge me to grow and
            learn something new.
          </p>
        </div>
      </div>

      <div className="about-me__illustration" aria-hidden="true">
        <PixelCat />
      </div>
    </section>
  );
}
