import RewardBanner from '../RewardBanner/RewardBanner';
import { GoldDefs, Coin } from '../shared/Coin';
import { BANNER_COPY, ROUTES } from '../../utils/bannerData';
import styles from './BonusVEsBanner.module.css';

const copy = BANNER_COPY.bonus;
const ROW_Y = [118, 184, 250];

function StepIcon({ index }) {
  const p = { fill: 'none', stroke: '#8fa8ff', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (index === 0) {
    return (
      <g {...p}>
        <rect x="-8" y="-9" width="16" height="18" rx="3" />
        <path d="M-4 -2 h8 M-4 3 h5" />
      </g>
    );
  }
  if (index === 1) {
    return (
      <g {...p}>
        <circle cx="-3" cy="-3" r="4" />
        <path d="M-10 9 c0 -5 4 -7 7 -7 s7 2 7 7" />
        <circle cx="6" cy="-4" r="3" />
      </g>
    );
  }
  return (
    <g {...p}>
      <polyline points="-9,6 -3,0 2,3 9,-6" />
      <polyline points="4,-6 9,-6 9,-1" />
    </g>
  );
}

function Illustration() {
  return (
    <svg
      viewBox="0 0 560 400"
      role="img"
      aria-label="Daily check-in, invite friends and complete tasks feed a bonus VE meter, next to an open vault of VE coins"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <GoldDefs id="bon" />
        <linearGradient id="bon-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6d789" />
          <stop offset="1" stopColor="#b9852c" />
        </linearGradient>
        <linearGradient id="bon-vault" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#232f66" />
          <stop offset="1" stopColor="#0e1433" />
        </linearGradient>
        <linearGradient id="bon-beam" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#f3c862" stopOpacity="0.55" />
          <stop offset="1" stopColor="#f3c862" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="bon-inner" cx="0.5" cy="0.8" r="0.8">
          <stop offset="0" stopColor="#f3c862" stopOpacity="0.55" />
          <stop offset="1" stopColor="#1b1406" stopOpacity="1" />
        </radialGradient>
        <marker id="bon-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#5b8cff" />
        </marker>
      </defs>

      {/* task cards */}
      {copy.steps.map((step, i) => (
        <g key={step.title}>
          <rect x="8" y={ROW_Y[i]} width="176" height="56" rx="12" fill="#101a40" stroke="#2a3b82" />
          <g transform={`translate(32 ${ROW_Y[i] + 28})`}>
            <StepIcon index={i} />
          </g>
          <text x="56" y={ROW_Y[i] + 25} fontSize="12" fontWeight="700" fill="#eef1ff">
            {step.title}
          </text>
          <text x="56" y={ROW_Y[i] + 41} fontSize="10" fill="#8190c4">
            {step.sub}
          </text>
          <circle cx="162" cy={ROW_Y[i] + 28} r="10" fill="#2f5bd8" />
          <path d={`M157 ${ROW_Y[i] + 28} l4 4 l7 -8`} stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ))}

      {/* flow into the bonus meter */}
      <g fill="none" stroke="#5b8cff" strokeWidth="2" strokeDasharray="5 6" markerEnd="url(#bon-arrow)">
        <path className={styles.dash} d="M186 146 C220 146 240 148 268 146" />
        <path className={styles.dash} d="M186 212 C225 212 245 180 276 166" />
        <path className={styles.dash} d="M186 278 C232 278 252 220 288 184" />
      </g>

      {/* bonus meter (ring fills once) */}
      <circle cx="332" cy="140" r="56" fill="#0b1232" stroke="#1f2c66" strokeWidth="9" />
      <circle
        className={styles.progress}
        cx="332"
        cy="140"
        r="56"
        fill="none"
        stroke="url(#bon-ring)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeDasharray="352"
        strokeDashoffset="88"
        transform="rotate(-90 332 140)"
      />
      <text x="332" y="132" textAnchor="middle" fontSize="13" fontWeight="700" letterSpacing="1.5" fill="#f3d27a">
        BONUS
      </text>
      <text x="332" y="162" textAnchor="middle" fontSize="34" fontWeight="800" fill="url(#bon-gold)">
        VE
      </text>
      <line x1="372" y1="98" x2="404" y2="74" stroke="#3f5fd0" strokeWidth="1.5" />
      <circle cx="414" cy="66" r="14" fill="#2f5bd8" stroke="#8fb0ff" />
      <path d="M414 59 v14 M407 66 h14" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />

      {/* pedestal, light beam and hero coin */}
      <ellipse cx="332" cy="340" rx="84" ry="20" fill="#101a44" stroke="#2b3f8f" />
      <ellipse cx="332" cy="328" rx="66" ry="15" fill="#0b1233" stroke="url(#bon-rim)" strokeOpacity="0.8" />
      <path d="M298 326 L366 326 L350 230 L314 230 Z" fill="url(#bon-beam)" className={styles.beam} />
      <path d="M322 336 l10 -7 l10 7" stroke="#e2b455" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="translate(332 262)">
        <g className={styles.bobA}>
          <Coin id="bon" r={44} />
        </g>
      </g>

      {/* open vault */}
      <rect x="428" y="130" width="124" height="200" rx="16" fill="url(#bon-vault)" stroke="#3b4a8f" />
      <rect x="440" y="146" width="70" height="168" rx="10" fill="url(#bon-inner)" stroke="#6b4d17" />
      <g transform="translate(466 296)"><Coin id="bon" r={16} /></g>
      <g transform="translate(492 290)"><Coin id="bon" r={15} /></g>
      <g transform="translate(476 270)"><Coin id="bon" r={15} /></g>
      <rect x="506" y="140" width="40" height="180" rx="10" fill="#131b45" stroke="#4a5aa8" />
      <circle cx="526" cy="230" r="19" fill="none" stroke="url(#bon-rim)" strokeWidth="3" />
      <path d="M526 211 v38 M507 230 h38" stroke="#c99a3c" strokeWidth="2" />

      {/* floating coins */}
      <g transform="translate(496 54) rotate(-15)">
        <g className={styles.bobB}>
          <g transform="scale(1 0.82)"><Coin id="bon" r={20} /></g>
        </g>
      </g>
      <g transform="translate(116 350) rotate(12)">
        <g className={styles.bobC}>
          <g transform="scale(1 0.85)"><Coin id="bon" r={22} /></g>
        </g>
      </g>
      <g transform="translate(486 352)">
        <g className={styles.bobB}>
          <Coin id="bon" r={24} />
        </g>
      </g>
    </svg>
  );
}

export default function BonusVEsBanner() {
  return (
    <RewardBanner
      theme={styles.theme}
      headingId="bonus-heading"
      heading={
        <>
          <span className={styles.line}>{copy.headingTop}</span>
          <span className={`${styles.line} ${styles.accent}`}>{copy.headingAccent}</span>
        </>
      }
      divider={
        <span className={styles.divider} aria-hidden="true">
          <span className={styles.rule} />
          <span className={styles.chev}>&rsaquo;&rsaquo;&rsaquo;</span>
        </span>
      }
      description={copy.description}
      cta={{ label: copy.cta, to: ROUTES.bonus, icon: 'arrow', variant: 'goldPill' }}
      illustration={<Illustration />}
    />
  );
}
