import "./App.css";
import Project from "./Project";
import NavBar from "./Navbar";

import { PROJECT_LIST } from "../../projects-list";
import { PERSONAL_INFO } from "../../personal-info";
import { CONTACT_INFO } from "../../contact-info";

function App() {
  const { aboutMe } = PERSONAL_INFO;

  const projectsSection = (
    <section className="section-light" id="projects">
      {PROJECT_LIST.map((project, i) => {
        return <Project key={i} projectInfo={project} />;
      })}
    </section>
  );

  const aboutMeSection = (
    <section className="section-medium" id="about">
      <h1>Learn More About Me</h1>
      {aboutMe.map((p, i) => {
        return <p key={i}>{aboutMe[i]}</p>;
      })}
      <a
        href="https://docs.google.com/document/d/1YKg61alJ5AOlfp224uXiHT957IIcBczdPtSvh1ILlg0/edit?usp=sharing"
        target="_blank"
      >
        <button className="button-light">View My Resume</button>
      </a>
    </section>
  );

  const contactInfoSection = (
    <section className="section-small section-dark" id="contact">
      <ul>
        {CONTACT_INFO.map((contact, i) => {
          return (
            <li key={i}>
              <a href={contact.url} target="_blank">
                <i className={contact.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );

  return (
    <>
      <NavBar />
      <section className="section-light" id="featured-project">
        <a href="#featured-project" className="logo">
          Sean Cody Design
        </a>
        <Project projectInfo={PROJECT_LIST[0]} />
      </section>
      {aboutMeSection}
      {projectsSection}
      {contactInfoSection}
    </>
  );
}

export default App;
