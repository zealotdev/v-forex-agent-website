import styles from './../styles/About.module.scss';

const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.header}>
        <h2>About US</h2>
      </div>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cum
        repellat eveniet deleniti, quia facilis dolorum perspiciatis quo
        doloribus eaque. Voluptates cupiditate architecto voluptatum blanditiis!
        Eligendi, ea architecto. Quas, debitis?
      </p>
    </div>
  );
};

export default About;
