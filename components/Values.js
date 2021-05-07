import styles from './../styles/Values.module.scss';

const Values = () => {
  return (
    <div className={styles.values}>
      <p className={styles.title}>
        <b>Reasons</b> to why you might consider choosing us.
      </p>
      <div className={styles.coreValues}>
        <div className={styles.coreValue}>
          <img src="./exp-icon.svg" alt="experience badge" />
          <span className={styles.ExpValue}>Vast Experience</span>
        </div>
        <div className={styles.coreValue}>
          <img src="./act-icon.svg" alt="active community badge" />
          <span className={styles.ActValue}>Active Community</span>
        </div>
        <div className={styles.coreValue}>
          <img src="./car-icon.svg" alt="caring badge" />
          <span className={styles.CareValue}>We care for your success</span>
        </div>
      </div>
    </div>
  );
};

export default Values;
