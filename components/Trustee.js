import styles from './../styles/Trustee.module.scss';

const Trustee = () => {
  return (
    <div className={styles.trustee}>
      <p className={styles.header}>We are trusted payment agent</p>
      <div className={styles.brands}>
        <img src="./superforex.webp" alt="super forex" />
        <img src="./skrill.png" alt="skrill" />
        <img src="./deriv.png" alt="deriv" />
        <img src="./localbtc.png" alt="local bitcoin" />
      </div>
    </div>
  );
};

export default Trustee;
