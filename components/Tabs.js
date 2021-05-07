import Link from 'next/link';
import { withRouter } from 'next/router';
import React from 'react';

import styles from './../styles/Tabs.module.scss';

const Tabs = ({ router }) => {
  const {
    query: { tab },
  } = router;

  const isTabOne = tab === '1' || tab == null;
  const isTabTwo = tab === '2';
  const isTabThree = tab === '3';

  const packageList = [
    {
      name: 'basic',
      desc: 'week plan',
      price: '$20',
    },
    {
      name: 'premium',
      desc: '3 Months',
      price: '$150',
    },
    {
      name: 'pro',
      desc: 'monthly plan',
      price: '$60',
    },
  ];
  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabHead}>
        <div className={`${styles.tab} ${isTabOne ? 'active' : ''}`}>
          <Link href={{ pathname: '', query: { tab: '1' } }} scroll={false}>
            <a>VIP Trading Signals</a>
          </Link>
        </div>
        <div className={`${styles.tab} ${isTabTwo ? 'active' : ''}`}>
          <Link href={{ pathname: '', query: { tab: '2' } }} scroll={false}>
            <a>Account Management</a>
          </Link>
        </div>
        <div className={`${styles.tab} ${isTabThree ? 'active' : ''}`}>
          <Link href={{ pathname: '', query: { tab: '3' } }} scroll={false}>
            <a>Payment Services</a>
          </Link>
        </div>
      </div>
      <div className={styles.tabBody}>
        {isTabOne && (
          <React.Fragment>
            <div className={styles.cards}>
              {packageList.map((packageItem) => {
                return (
                  <div className={styles.card} key={packageItem.name}>
                    <div className={styles.cardHead}>
                      <h4>{packageItem.name}</h4>
                      <span>{packageItem.desc}</span>
                    </div>
                    <div className={styles.cardBody}>
                      <span className={styles.for}>for</span>
                      <span className={styles.price}>{packageItem.price}</span>
                    </div>
                    <div className={styles.cardAction}>
                      <button>apply now</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        )}
        {isTabTwo && <React.Fragment>This is tab two component</React.Fragment>}
        {isTabThree && (
          <React.Fragment>This is tab three component</React.Fragment>
        )}
      </div>
    </div>
  );
};

export default withRouter(Tabs);
