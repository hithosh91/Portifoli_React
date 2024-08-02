import { getImageUrl } from "../../util";
import styles from "../About/About.module.css";
const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="sitting on Laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div>
              <h3>Frontend Developer</h3>
              <p>
                Skilled in creating dynamic, responsive user interfaces using
                React.js, with a focus on seamless user experiences and
                efficient state management
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div>
              <h3>Backend Developer</h3>
              <p>
                Expert in building robust and scalable server-side applications
                using Node.js and Express, with a focus on efficient database
                management and RESTful API development
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
