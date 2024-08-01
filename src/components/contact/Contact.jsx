import { getImageUrl } from "../../util";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:hithoshkota@yahoo.com">hithoshkota@yahoo.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/hithosh-kota-5a5a23315/">
            linkedin.com/hithosh
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/hithosh91">github.com/hithosh91</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
