import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, CircleHelp } from 'lucide-react';
import { FaGift } from 'react-icons/fa';
import styles from './Header.module.css';

/** Site-wide navigation header shared by the homepage and feature preview pages. */
export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const homeAnchor = (id) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link className={styles.brand} to="/" aria-label="VELOOP Rewards home">
          <span className={styles.brandMark}>
            <FaGift aria-hidden="true" />
          </span>
          <span className={styles.brandText}>
            <strong>VELOOP</strong>
            <small>REWARDS</small>
          </span>
        </Link>

        <nav className={styles.navigation} aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
          >
            Overview
          </NavLink>
          <a className={styles.navLink} href={homeAnchor('experiences')}>
            Experiences <ChevronDown size={14} aria-hidden="true" />
          </a>
          <a className={styles.navLink} href={homeAnchor('about')}>
            About this preview
          </a>
        </nav>

        <div className={styles.headerActions}>
          <span className={styles.previewStatus}>
            <span aria-hidden="true" />
            Design preview
          </span>
          <Link className={styles.helpLink} to="/how-it-works" aria-label="Explore a feature guide">
            <CircleHelp size={17} aria-hidden="true" />
          </Link>
          <Link className={styles.headerCta} to="/#experiences">
            Explore <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}
