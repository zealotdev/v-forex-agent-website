import Link from 'next/link';
import { useState } from 'react';
import styles from './../styles/Header.module.scss';

const Header = () => {
  const [toggled, toggleState] = useState(false);

  const onToggle = () => {
    toggleState(!toggled);
  };

  const onLinkClick = () => {
    toggleState(!toggled);
  };

  return (
    <header className={styles.nav}>
      <div className={styles.navLogo}>
        <Link href="/">
          <a>
            <img
              src="./logo.svg"
              alt="viwango logo"
              className={styles.navLogoImage}
            />
          </a>
        </Link>
      </div>
      <span className={styles.hamburger} onClick={onToggle}>
        {toggled ? <img src="./close.svg" /> : <img src="./hamburger.svg" />}
      </span>
      <nav className={styles.navBar}>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <a href="#about">About Us</a>
          </li>
          <li className={styles.navLinkItem}>
            <a href="#services">Our Services</a>
          </li>
          <li className={styles.navLinkItem}>
            <a href="#contacts">Contact Us</a>
          </li>
        </ul>
      </nav>
      {toggled ? (
        <nav className={styles.mobileNavBar}>
          <ul className={styles.navLinks}>
            <li className={styles.navLinkItem}>
              <a href="#about" onClick={onLinkClick}>
                About Us
              </a>
            </li>
            <li className={styles.navLinkItem}>
              <a href="#services" onClick={onLinkClick}>
                Our Services
              </a>
            </li>
            <li className={styles.navLinkItem}>
              <a href="#contacts" onClick={onLinkClick}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        ''
      )}
    </header>
  );
};

export default Header;
