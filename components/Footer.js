import styles from './../styles/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <figure>
        <img
          src="./viwango.svg"
          alt="viwando logo"
          className={styles.footerLogo}
        ></img>
        <figcaption>viwangofx.com</figcaption>
      </figure>
      <div className={styles.desc}>
        <div className={styles.servicesList}>
          <h4 className={styles.title}>Services</h4>
          <ul className={styles.list}>
            <li>
              <img src="./bulletin-icon.svg" alt="checklist" />
              <span>Forex Trading Training</span>
            </li>
            <li>
              <img src="./bulletin-icon.svg" alt="checklist" />
              <span>Forex Mentorship Programmes</span>
            </li>
            <li>
              <img src="./bulletin-icon.svg" alt="checklist" />
              <span>Forex Trading Signals</span>
            </li>
            <li>
              <img src="./bulletin-icon.svg" alt="checklist" />
              <span>
                Payment Agency( Deriv, Perfect Forex, Skrill, localbtc)
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.communityLinks}>
          <h4 className={styles.title}>Community</h4>
          <ul className={styles.list}>
            <li>
              <a href="#">Free Telegram Signal Channel</a>
            </li>
            <li>
              <a href="#">Free WhatsApp Signal Group</a>
            </li>
            <li>
              <a href="#">Instagram Page</a>
            </li>
            <li>
              <a href="#">Facebook Page</a>
            </li>
            <li>
              <a href="#">Youtube Channel</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
