import { Check } from 'lucide-react';
import RewardBanner from '../RewardBanner/RewardBanner';
import { GemShape, GemIcon } from '../shared/Gem';
import { BANNER_COPY, ROUTES } from '../../utils/bannerData';
import styles from './CaptchaTasksBanner.module.css';

const copy = BANNER_COPY.captcha;

function Sparkle({ x, y, s = 1, delay = 0 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path
        className={styles.twinkle}
        style={{ animationDelay: `${delay}s` }}
        d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z"
        fill="#e9e1ff"
      />
    </g>
  );
}

function Illustration() {
  // Keyboard keys: 3 rows that widen toward the viewer (simple perspective).
  const keys = [];
  for (let r = 0; r < 3; r += 1) {
    const left = 188 - r * 14;
    const width = 194 + r * 28;
    const cols = 11;
    const w = width / cols;
    for (let c = 0; c < cols; c += 1) {
      keys.push(
        <rect
          key={`${r}-${c}`}
          x={left + c * w + 1.5}
          y={259 + r * 13}
          width={w - 3}
          height={9}
          rx="2.5"
          fill="#262552"
        />
      );
    }
  }

  return (
    <svg
      viewBox="0 0 560 400"
      role="img"
      aria-label="Laptop showing the captcha code K7M4 being typed in, surrounded by purple gems"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="cap-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2c2b50" />
          <stop offset="1" stopColor="#14142b" />
        </linearGradient>
        <linearGradient id="cap-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#292466" />
          <stop offset="1" stopColor="#15133a" />
        </linearGradient>
        <linearGradient id="cap-swoosh" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8f7bff" stopOpacity="0" />
          <stop offset="1" stopColor="#b7a4ff" />
        </linearGradient>
        <radialGradient id="cap-glow">
          <stop offset="0" stopColor="#7a5cf0" stopOpacity="0.38" />
          <stop offset="1" stopColor="#7a5cf0" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="290" cy="320" rx="270" ry="80" fill="url(#cap-glow)" />

      {/* platform + keyboard deck */}
      <rect x="60" y="300" width="450" height="58" rx="28" fill="url(#cap-base)" stroke="#4b4590" strokeOpacity="0.6" />
      <rect x="250" y="346" width="70" height="4" rx="2" fill="#6b72ff" />
      <path d="M172 252 L398 252 L450 300 L120 300 Z" fill="#171636" stroke="#3b3680" strokeOpacity="0.7" />
      {keys}

      {/* screen */}
      <rect x="150" y="40" width="270" height="205" rx="20" fill="url(#cap-screen)" stroke="#5446c4" strokeOpacity="0.7" strokeWidth="2" />
      <rect x="166" y="56" width="238" height="173" rx="12" fill="#100e2c" />

      {/* captcha image */}
      <rect x="182" y="76" width="190" height="60" rx="8" fill="#d8d4ea" />
      <text
        x="277"
        y="118"
        textAnchor="middle"
        fontSize="42"
        fontWeight="800"
        letterSpacing="4"
        fill="#25203f"
        transform="rotate(-2 277 106)"
      >
        K7M4
      </text>
      <path d="M186 100 Q220 80 260 108 T368 96" stroke="#2a2547" strokeWidth="1.6" fill="none" opacity="0.6" />
      <path d="M186 124 Q240 110 290 126 T368 112" stroke="#2a2547" strokeWidth="1.4" fill="none" opacity="0.5" />

      {/* refresh button */}
      <circle cx="388" cy="84" r="17" fill="#2a2561" stroke="#7f6fe6" />
      <path d="M381 84 a7 7 0 1 1 2 5" stroke="#d9d2ff" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <polygon points="377,80 385,80 381,87" fill="#d9d2ff" />

      {/* answer input + submit */}
      <rect x="182" y="156" width="150" height="40" rx="10" fill="#0b0a22" stroke="#403a8f" />
      <text x="196" y="182" fontSize="20" fontWeight="600" fill="#fff">
        K7M4
      </text>
      <rect className={styles.caret} x="254" y="166" width="2" height="20" fill="#fff" />
      <g className={styles.pop}>
        <rect x="342" y="156" width="52" height="40" rx="10" fill="#5b61f0" />
        <path d="M356 176 l7 7 l14 -14" stroke="#fff" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <path d="M430 38 C505 8 528 88 478 112" stroke="url(#cap-swoosh)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <Sparkle x={436} y={64} s={1.2} />
      <Sparkle x={520} y={64} s={0.8} delay={0.8} />
      <Sparkle x={70} y={200} s={0.9} delay={1.4} />

      {/* gems (outer g positions, inner g floats) */}
      <g transform="translate(470 156) scale(1.7)">
        <g className={styles.floatA}>
          <GemShape />
        </g>
      </g>
      <g transform="translate(424 288) scale(1.35)">
        <g className={styles.floatB}>
          <GemShape />
        </g>
      </g>
      <g transform="translate(104 262) scale(1.25)">
        <g className={styles.floatC}>
          <GemShape />
        </g>
      </g>
      <g transform="translate(522 244) scale(0.6)">
        <g className={styles.floatC}>
          <GemShape />
        </g>
      </g>
    </svg>
  );
}

function Flow() {
  return (
    <ol className={styles.flow} aria-label="How it works: solve the captcha, get verified, earn a gem">
      <li>
        <span className={styles.box}>
          <span className={styles.thumb}>K7M4</span>
        </span>
      </li>
      <li>
        <span className={`${styles.box} ${styles.round}`}>
          <Check size={20} aria-hidden="true" />
        </span>
      </li>
      <li>
        <span className={styles.box}>
          <GemIcon size={30} />
        </span>
      </li>
    </ol>
  );
}

export default function CaptchaTasksBanner() {
  return (
    <RewardBanner
      theme={styles.theme}
      headingId="captcha-heading"
      heading={
        <>
          <span className={styles.line}>{copy.headingTop}</span>
          <span className={`${styles.line} ${styles.accent}`}>{copy.headingAccent}</span>
        </>
      }
      description={copy.description}
      cta={{ label: copy.cta, to: ROUTES.captcha, icon: 'chevrons', variant: 'goldSplit' }}
      extra={<Flow />}
      illustration={<Illustration />}
    />
  );
}
