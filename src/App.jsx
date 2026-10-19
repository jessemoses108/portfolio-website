// src/App.jsx
import Navbar from "./sections/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import AboutMe from "./sections/AboutMe/AboutMe";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import ProjectsGrid from "./sections/Projects/Projects";
import { projects } from "./data/projects";
import Contacts from './sections/Contacts/Contacts';
import "./App.css";

function App() {
  return (
    <>
      <Navbar activeSection="Home" />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <ProjectsGrid projects={projects} />
        <Contacts />
      </main>
    </>
  );
}

export default App;
