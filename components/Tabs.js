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
                      <label className={styles.for}>for only </label>
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
        {isTabTwo && (
          <React.Fragment>
            <div className={styles.tabTwo}>
              <p className={styles.tabTwoDesc}>
                If trading can not fit in your daily schedule but you would like
                to increase your substantial earning, we got you covered. Our
                trained team is ready to manage your account and split 50/50
                profits on a pre-planned basis.
              </p>
              <span className={styles.tabTwoHints}>
                Requirements:{' '}
                <span>
                  <b>$500</b> on your trading account.
                </span>
              </span>
            </div>
          </React.Fragment>
        )}
        {isTabThree && (
          <React.Fragment>
            <div className={styles.tabThree}>
              <p className={styles.tabThreeDesc}>
                We provide payment services on the following
              </p>
              <span className={styles.tabThreeHints}>
                <ul>
                  <li>
                    <b>Super Forex </b> Deposit/Withdraw Service
                  </li>
                  <li>
                    <b>Deriv/Binary </b> Deposit/Withdraw Service
                  </li>
                  <li>
                    <b>LocalBitcoin </b> Buy/Sell BTC
                  </li>
                  <li>
                    <b>Skrill </b> Buy/Sell USD
                  </li>
                </ul>
              </span>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default withRouter(Tabs);
