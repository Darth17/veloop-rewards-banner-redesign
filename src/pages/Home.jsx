import ReferEarnBanner from '../components/ReferEarnBanner/ReferEarnBanner';
import SwapCenterBanner from '../components/SwapCenterBanner/SwapCenterBanner';
import BonusVEsBanner from '../components/BonusVEsBanner/BonusVEsBanner';
import CaptchaTasksBanner from '../components/CaptchaTasksBanner/CaptchaTasksBanner';
import ExchangeCenterBanner from '../components/ExchangeCenterBanner/ExchangeCenterBanner';
import styles from './Home.module.css';

/** Showcase page: every banner stacked at 100% of the Bootstrap container width. */
export default function Home() {
  return (
    <main className="container py-4 py-lg-5">
      <header className={styles.header} id="about">
        <h1 className={styles.title}>VELOOP Rewards</h1>
        <p className={styles.sub}>Promotional and feature banners</p>
      </header>
      <div className="d-flex flex-column gap-4" id="experiences">
        <ReferEarnBanner />
        <SwapCenterBanner />
        <BonusVEsBanner />
        <CaptchaTasksBanner />
        <ExchangeCenterBanner />
      </div>
    </main>
  );
}
