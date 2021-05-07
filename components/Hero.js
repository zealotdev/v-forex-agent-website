import styles from './../styles/Hero.module.scss';

const Hero = () => {
  const packageItems = [
    '3 Months live trading signals',
    '150 pips a week (with over 80% hit rate)',
    'Chart analysis on demand',
    'VIP group discussion with our traders',
    'Weekly trading reviews',
  ];
  return (
    <div className={styles.hero}>
      <div className={styles.heroCTA}>
        <h1>Start your new trading experience today.</h1>
        <span>With our exclusive plan, you will get:</span>
        <ul className={styles.packageItems}>
          {packageItems.map((item) => {
            return (
              <li className={styles.packageItem} key={item}>
                <img
                  src="./bulletin-icon.svg"
                  alt="bulletin icon"
                  className={styles.bulletinIcon}
                />
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
        <div className={styles.CTAButtons}>
          <button className={styles.CTABtn}>start now</button>
          <a className={styles.CTAMore} href="#services">
            explore other plans 👉
          </a>
        </div>
      </div>
      <div className={styles.heroIllustration}>
        <span className={styles.bubbleOne}></span>
        <span className={styles.bubbleTwo}></span>
        <img src="./trading-view.jpg" alt="mobile trading view" />
      </div>
    </div>
  );
};

export default Hero;
