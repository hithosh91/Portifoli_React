import styles from "./Hero.module.css";
import { getImageUrl } from "../../util";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm HIthosh</h1>
        <p className={styles.description}>
          Software Development Engineer with a Master’s degree and 3 years of
          experience as a MERN Stack Developer. Skilled in MongoDB, Express.js,
          React, and Node.js, with a strong focus on creating efficient and
          scalable solutions. Passionate about problem-solving and delivering
          high-quality code.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
