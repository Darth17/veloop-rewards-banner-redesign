import RewardBanner from '../RewardBanner/RewardBanner';
import { GoldDefs } from '../shared/Coin';
import { BANNER_COPY, ROUTES } from '../../utils/bannerData';
import styles from './SwapCenterBanner.module.css';

const copy = BANNER_COPY.swap;
const STAR = 'M0 -17 L5 -5 L17 0 L5 5 L0 17 L-5 5 L-17 0 L-5 -5Z';

function Illustration() {
  return (
    <svg
      viewBox="0 0 560 400"
      role="img"
      aria-label="A VE reward currency card and an SVE reward currency card with a circular swap icon between them, above a reward wallet"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <GoldDefs id="sw" />
        <linearGradient id="sw-vecard" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2c2616" />
          <stop offset="1" stopColor="#0c0b09" />
        </linearGradient>
        <linearGradient id="sw-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3f73e6" />
          <stop offset="1" stopColor="#1a3590" />
        </linearGradient>
        <radialGradient id="sw-glow">
          <stop offset="0" stopColor="#3b6fe0" stopOpacity="0.4" />
          <stop offset="1" stopColor="#3b6fe0" stopOpacity="0" />
        </radialGradient>
        <marker id="sw-gold-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#e2b455" />
        </marker>
        <marker id="sw-blue-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#6d9bff" />
        </marker>
      </defs>

      <ellipse cx="282" cy="250" rx="270" ry="150" fill="url(#sw-glow)" />

      {/* reward wallet behind the cards */}
      <rect x="205" y="18" width="154" height="364" rx="22" fill="#0e1740" stroke="#2e4aa8" strokeOpacity="0.9" />
      <text x="224" y="48" fontSize="9" letterSpacing="1" fill="#8aa0e0">REWARD WALLET</text>
      <circle cx="318" cy="45" r="2" fill="#6d82c8" />
      <circle cx="326" cy="45" r="2" fill="#6d82c8" />
      <circle cx="334" cy="45" r="2" fill="#6d82c8" />
      <text x="224" y="76" fontSize="9" fill="#8aa0e0">Eligible Balances</text>
      <rect x="216" y="290" width="132" height="36" rx="10" fill="#0c1544" stroke="#26407f" />
      <circle cx="234" cy="308" r="9" fill="#14204f" stroke="#e2b455" />
      <rect x="250" y="305" width="62" height="6" rx="3" fill="#c99a3c" />
      <path d="M322 308 h16 m-5 -5 l5 5 l-5 5" stroke="#e2b455" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="216" y="334" width="132" height="36" rx="10" fill="#0c1544" stroke="#26407f" />
      <circle cx="234" cy="352" r="9" fill="#14204f" stroke="#6d9bff" />
      <rect x="250" y="349" width="62" height="6" rx="3" fill="#3f5fd0" />
      <path d="M338 352 h-16 m5 -5 l-5 5 l5 5" stroke="#6d9bff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* VE card (gold on black) */}
      <g transform="translate(34 120) rotate(-7 95 60)">
        <g className={styles.driftL}>
          <rect width="190" height="118" rx="14" fill="url(#sw-vecard)" stroke="#d9b25a" strokeWidth="1.5" />
          <text x="18" y="40" fontSize="26" fontWeight="800" fill="url(#sw-gold)">VE</text>
          <text x="18" y="56" fontSize="7.5" letterSpacing="0.8" fill="#b99a55">REWARD CURRENCY</text>
          <rect x="18" y="76" width="26" height="20" rx="4" fill="#c9a24c" opacity="0.8" />
          <circle cx="142" cy="64" r="32" fill="#14110a" stroke="url(#sw-gold)" strokeWidth="3" />
          <path d={STAR} transform="translate(142 64)" fill="url(#sw-gold)" />
        </g>
      </g>

      {/* SVE card (blue glass) */}
      <g transform="translate(298 108) rotate(6 95 60)">
        <g className={styles.driftR}>
          <rect width="190" height="118" rx="14" fill="url(#sw-blue)" fillOpacity="0.92" stroke="#7fb0ff" strokeWidth="1.5" />
          <text x="18" y="40" fontSize="26" fontWeight="800" fill="#fff">SVE</text>
          <text x="18" y="56" fontSize="7.5" letterSpacing="0.8" fill="#b9d2ff">REWARD CURRENCY</text>
          <rect x="18" y="76" width="26" height="20" rx="4" fill="#8fb0ff" opacity="0.5" />
          <circle cx="142" cy="64" r="32" fill="#10215e" stroke="#bcd4ff" strokeWidth="3" />
          <path d={STAR} transform="translate(142 64)" fill="#dbe8ff" />
        </g>
      </g>

      {/* swap icon */}
      <g transform="translate(282 216)">
        <circle r="56" fill="none" stroke="#3b6fe0" strokeOpacity="0.35" strokeWidth="2" />
        <circle r="46" fill="#091033" stroke="#5b8cff" strokeWidth="3" />
        <g className={styles.spin}>
          <path d="M-26 -8 A28 28 0 0 1 22 -16" fill="none" stroke="#dbe6ff" strokeWidth="6" strokeLinecap="round" />
          <polygon points="16,-27 31,-17 14,-9" fill="#dbe6ff" />
          <path d="M26 8 A28 28 0 0 1 -22 16" fill="none" stroke="#dbe6ff" strokeWidth="6" strokeLinecap="round" />
          <polygon points="-16,27 -31,17 -14,9" fill="#dbe6ff" />
        </g>
      </g>

      {/* direction streaks */}
      <g fill="none" strokeWidth="2.4" strokeLinecap="round">
        <path className={styles.streakR} d="M6 150 H36" stroke="#e2b455" markerEnd="url(#sw-gold-arrow)" />
        <path className={styles.streakR} d="M6 186 H30" stroke="#e2b455" markerEnd="url(#sw-gold-arrow)" style={{ animationDelay: '-0.7s' }} />
        <path className={styles.streakR} d="M6 300 H40" stroke="#e2b455" markerEnd="url(#sw-gold-arrow)" style={{ animationDelay: '-1.2s' }} />
        <path className={styles.streakL} d="M554 250 H512" stroke="#6d9bff" markerEnd="url(#sw-blue-arrow)" />
        <path className={styles.streakL} d="M554 280 H524" stroke="#6d9bff" markerEnd="url(#sw-blue-arrow)" style={{ animationDelay: '-0.9s' }} />
        <path className={styles.streakL} d="M554 310 H518" stroke="#6d9bff" markerEnd="url(#sw-blue-arrow)" style={{ animationDelay: '-1.4s' }} />
      </g>

      <ellipse cx="282" cy="374" rx="210" ry="16" fill="none" stroke="#3b6fe0" strokeOpacity="0.35" />
      <ellipse cx="282" cy="374" rx="150" ry="11" fill="none" stroke="#e2b455" strokeOpacity="0.35" />
      <circle className={styles.twinkle} cx="60" cy="70" r="3" fill="#e2b455" />
      <circle className={styles.twinkle} cx="500" cy="110" r="3" fill="#6d9bff" style={{ animationDelay: '0.8s' }} />
      <circle className={styles.twinkle} cx="120" cy="330" r="2.5" fill="#e2b455" style={{ animationDelay: '1.4s' }} />
    </svg>
  );
}

export default function SwapCenterBanner() {
  return (
    <RewardBanner
      theme={styles.theme}
      headingId="swap-heading"
      heading={
        <>
          <span className={styles.accent}>{copy.headingTop}</span>
          {copy.headingRest}
        </>
      }
      divider={<span className={styles.rule} aria-hidden="true" />}
      description={copy.description}
      cta={{ label: copy.cta, to: ROUTES.swap, icon: 'chevron', variant: 'gold' }}
      illustration={<Illustration />}
    />
  );
}
