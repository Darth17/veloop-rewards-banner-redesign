
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { FaGift } from 'react-icons/fa';
import { ROUTES } from '../../utils/bannerData';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Main footer content */}
        <div className={styles.top}>

          {/* Brand section */}
          <div className={styles.brandColumn}>
            <Link to="/" className={styles.brand}>
              <span className={styles.brandMark}>
                <FaGift />
              </span>

              <span className={styles.brandText}>
                <strong>VELOOP</strong>
                <small>REWARDS</small>
              </span>
            </Link>

            <p className={styles.description}>
              Discover new ways to earn, swap and
              redeem rewards with VELOOP Rewards.
            </p>
          </div>

          {/* Explore links */}
          <nav className={styles.linkColumn}>
            <h2>Explore</h2>

            <ul>
              <li><Link to="/">Overview</Link></li>
              <li><a href="/#experiences">Experiences</a></li>
              <li><a href="/#about">About this preview</a></li>
            </ul>
          </nav>

          {/* Feature links */}
          <nav className={styles.linkColumn}>
            <h2>Features</h2>

            <ul>
              <li><Link to={ROUTES.refer}>Refer & Earn</Link></li>
              <li><Link to={ROUTES.swap}>Swap Center</Link></li>
              <li><Link to={ROUTES.bonus}>Bonus VEs</Link></li>
              <li><Link to={ROUTES.captcha}>Captcha Tasks</Link></li>
              <li><Link to={ROUTES.exchange}>Exchange Center</Link></li>
            </ul>
          </nav>

        </div>

        {/* Bottom footer strip */}
        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} VELOOP Rewards.
            Interface preview.
          </p>

          <a href="#" className={styles.backToTop}>
            Back to top
            <ArrowUp size={15} />
          </a>
        </div>

      </div>
    </footer>
  );
}
