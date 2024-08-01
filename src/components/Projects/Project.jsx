import styles from "./Project.module.css";
import projects from "../data/project.json";
import { ProjectCard } from "./ProjectCard";
const Project = () => {
  console.log(projects);
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Project;
