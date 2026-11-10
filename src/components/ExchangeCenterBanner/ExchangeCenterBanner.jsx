import { Repeat } from 'lucide-react';
import RewardBanner from '../RewardBanner/RewardBanner';
import { GemShape, GemIcon } from '../shared/Gem';
import { GoldDefs, Coin } from '../shared/Coin';
import { BANNER_COPY, ROUTES } from '../../utils/bannerData';
import styles from './ExchangeCenterBanner.module.css';

const copy = BANNER_COPY.exchange;

function Illustration() {
  return (
    <svg
      viewBox="0 0 560 400"
      role="img"
      aria-label="A Gem card on the left converts into a VE coin card on the right, with an exchange rate panel below"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <GoldDefs id="ex" />
        <linearGradient id="ex-gemcard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#201a4a" />
          <stop offset="1" stopColor="#110f28" />
        </linearGradient>
        <linearGradient id="ex-vecard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2e2412" />
          <stop offset="1" stopColor="#0f0c06" />
        </linearGradient>
        <radialGradient id="ex-glow">
          <stop offset="0" stopColor="#7a5cf0" stopOpacity="0.3" />
          <stop offset="1" stopColor="#7a5cf0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ex-goldglow">
          <stop offset="0" stopColor="#f3c862" stopOpacity="0.35" />
          <stop offset="1" stopColor="#f3c862" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="110" cy="190" rx="120" ry="140" fill="url(#ex-glow)" />
      <ellipse cx="450" cy="180" rx="130" ry="150" fill="url(#ex-goldglow)" />

      {/* GEM card */}
      <rect x="36" y="60" width="150" height="250" rx="18" fill="url(#ex-gemcard)" stroke="#5a4aa8" strokeWidth="1.5" />
      <text x="111" y="96" textAnchor="middle" fontSize="16" fontWeight="700" letterSpacing="1.5" fill="#a994ff">GEM</text>
      <ellipse cx="111" cy="282" rx="48" ry="9" fill="#7a5cf0" opacity="0.3" />
      <g transform="translate(111 186) scale(2.1)">
        <g className={styles.floatY}>
          <GemShape />
        </g>
      </g>

      {/* VE card */}
      <rect x="372" y="40" width="152" height="270" rx="18" fill="url(#ex-vecard)" stroke="#d9b25a" strokeWidth="1.5" />
      <text x="448" y="76" textAnchor="middle" fontSize="16" fontWeight="700" letterSpacing="1.5" fill="#e2b455">VE</text>
      <circle cx="448" cy="176" r="74" fill="none" stroke="#e2b455" strokeOpacity="0.25" />
      <g transform="translate(448 176)">
        <g className={styles.glowPulse}>
          <Coin id="ex" r={58} />
        </g>
      </g>
      <circle cx="498" cy="284" r="18" fill="#1a1405" stroke="url(#ex-gold)" strokeWidth="2.5" />
      <path d="M489 284 l7 7 l13 -14" stroke="#f3d27a" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* particle stream: gems flowing toward the converter */}
      <g>
        <circle className={styles.stream} cx="196" cy="130" r="3" fill="#a994ff" />
        <circle className={styles.stream} cx="196" cy="160" r="4" fill="#c9bbff" style={{ animationDelay: '-0.6s' }} />
        <circle className={styles.stream} cx="196" cy="192" r="3" fill="#a994ff" style={{ animationDelay: '-1.1s' }} />
        <circle className={styles.stream} cx="196" cy="222" r="4" fill="#c9bbff" style={{ animationDelay: '-1.6s' }} />
      </g>

      {/* converter ring + arrow */}
      <circle cx="282" cy="176" r="50" fill="none" stroke="#6f57e6" strokeOpacity="0.25" strokeWidth="2" />
      <circle cx="282" cy="176" r="38" fill="#14102c" stroke="#8f7bff" strokeWidth="2.5" />
      <g transform="translate(282 176)">
        <g className={styles.spin}>
          <path d="M-18 -6 A19 19 0 0 1 15 -11" fill="none" stroke="#c9bbff" strokeWidth="4" strokeLinecap="round" />
          <polygon points="10,-19 21,-12 9,-6" fill="#c9bbff" />
          <path d="M18 6 A19 19 0 0 1 -15 11" fill="none" stroke="#c9bbff" strokeWidth="4" strokeLinecap="round" />
          <polygon points="-10,19 -21,12 -9,6" fill="#c9bbff" />
        </g>
      </g>
      <path className={styles.arrow} d="M326 164 H350 V150 L376 176 L350 202 V188 H326 Z" fill="url(#ex-gold)" />

      {/* exchange rate chip (no numbers: rate comes from approved rules) */}
      <rect x="215" y="262" width="134" height="52" rx="10" fill="#14112b" stroke="#3d3687" />
      <text x="282" y="280" textAnchor="middle" fontSize="8" letterSpacing="1" fill="#8f93c0">EXCHANGE RATE</text>
      <g transform="translate(240 299) scale(0.36)"><GemShape /></g>
      <text x="282" y="303" textAnchor="middle" fontSize="14" fontWeight="800" fill="#a994ff">&gt;&gt;&gt;</text>
      <g transform="translate(326 297)"><Coin id="ex" r={11} /></g>
    </svg>
  );
}

function Flow() {
  return (
    <ol className={styles.flow} aria-label="How it works: Gems, convert, VEs">
      <li>
        <span className={`${styles.node} ${styles.gem}`}>
          <GemIcon size={26} />
        </span>
        <span className={`${styles.label} ${styles.gemText}`}>GEM</span>
      </li>
      <li>
        <span className={`${styles.node} ${styles.mid}`}>
          <Repeat size={20} aria-hidden="true" />
        </span>
        <span className={styles.label}>CONVERT</span>
      </li>
      <li>
        <span className={`${styles.node} ${styles.ve}`}>VE</span>
        <span className={`${styles.label} ${styles.veText}`}>VE</span>
      </li>
    </ol>
  );
}

export default function ExchangeCenterBanner() {
  return (
    <RewardBanner
      theme={styles.theme}
      headingId="exchange-heading"
      heading={
        <>
          Convert <span className={styles.gemAccent}>Gems</span> to <span className={styles.veAccent}>VEs</span>
        </>
      }
      description={copy.description}
      cta={{ label: copy.cta, to: ROUTES.exchange, icon: 'chevron', variant: 'gold' }}
      extra={<Flow />}
      illustration={<Illustration />}
    />
  );
}
