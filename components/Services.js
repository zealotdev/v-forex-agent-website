import styles from './../styles/Services.module.scss';

import Tabs from './Tabs';

const Services = () => {
  return (
    <div className={styles.services} id="services">
      <div className={styles.header}>
        <h2>Services</h2>
      </div>
      <div className={styles.accordion}>
        <p className={styles.desc}>
          <b>We</b> got what you looking.
        </p>
        <Tabs />
      </div>
    </div>
  );
};

export default Services;
