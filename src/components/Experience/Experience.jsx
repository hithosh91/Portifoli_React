import skills from "../data/skills.json";
import history from "../data/history.json";
import styles from "../Experience/Experience.module.css";
import { getImageUrl } from "../../util";
const Experience = () => {
  return (
    <section className={styles.conatiner} id="Experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((data, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img src={getImageUrl(data.imageSrc)} alt={data.title} />
                <div>
                  <h3>
                    {data.role},{data.organisation}
                  </h3>

                  <p>
                    {data.startDate}-{data.endDate}
                  </p>
                  <h4>{data.experiences}</h4>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Experience;
