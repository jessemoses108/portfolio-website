// sections/ContactSection/ContactSection.jsx
import './Contacts.css'
import ContactForm from "../../components/ContactForm/ContactForm";
import IconCircleButton from "../../components/IconCircleButton/IconCircleButton";
import GithubIcon from "../../icons/GithubIcon";
import MailIcon from "../../icons/MailIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import LinkedinIcon from "../../icons/LinkedinIcon";

const specialties = [
  "Web & Mobile Development",
  "UI/UX Design",
  "Technical Consulting",
];

const socials = [
  { icon: GithubIcon, label: "GitHub profile", href: "#" },
  { icon: MailIcon, label: "Send an email", href: "mailto:hello@example.com" },
  { icon: TwitterIcon, label: "Twitter profile", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn profile", href: "#" },
];

export default function Contacts() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="contact-section__title">
        Let's Work Together
      </h2>

      <div className="contact-split">
        <ContactForm />

        <div className="contact-info-column">
          <div className="collab-info">
            <p className="collab-info__text">
              I'm always open to discussing new opportunities, creative
              projects, or partnerships. Whether you have a specific project in
              mind or just want to explore possibilities, I'd love to connect.
            </p>
            <ul className="specialties-list">
              {specialties.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="socials-container">
            <h3 className="socials-container__title">My Socials</h3>
            <div className="socials-container__icons">
              {socials.map((social) => (
                <IconCircleButton key={social.label} size="lg" {...social} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
