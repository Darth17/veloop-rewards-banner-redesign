import { Link } from 'react-router-dom';
import { Users, Gift, Zap, ShieldCheck, Trophy } from 'lucide-react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import RewardBanner from '../RewardBanner/RewardBanner';
import { GoldDefs, Coin } from '../shared/Coin';
import useInView from '../../hooks/useInView';
import useCountUp from '../../hooks/useCountUp';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';
import { BANNER_COPY, REFER_FEATURES, REFERRAL_DEMO, ROUTES } from '../../utils/bannerData';
import styles from './ReferEarnBanner.module.css';

const copy = BANNER_COPY.refer;
const FEATURE_ICONS = { share: Zap, rewards: Gift, secure: ShieldCheck, unlimited: Trophy };

function VCoin({ x, y, r = 26, delay = 0 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className={styles.bob} style={{ animationDelay: `${delay}s` }}>
        <circle r={r} fill="url(#ref-blue)" stroke="#9bbcff" strokeWidth="2.5" />
        <circle r={r * 0.74} fill="none" stroke="#9bbcff" strokeOpacity="0.5" />
        <text textAnchor="middle" dominantBaseline="central" fontSize={r * 0.95} fontWeight="800" fill="#fff">
          V
        </text>
      </g>
    </g>
  );
}

function Diamond({ x, y, c = '#7c8dff', delay = 0 }) {
  return (
    <rect
      className={styles.twinkle}
      x={x}
      y={y}
      width="8"
      height="8"
      fill={c}
      transform={`rotate(45 ${x + 4} ${y + 4})`}
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

function Illustration() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const earn = useCountUp(REFERRAL_DEMO.youEarn, { start: inView });
  const friend = useCountUp(REFERRAL_DEMO.friendGets, { start: inView });
  const { copied, copy: copyCode } = useCopyToClipboard();

  return (
    <svg
      ref={ref}
      viewBox="0 0 560 400"
      role="img"
      aria-label="Two friends sharing a referral code beside a gift box; you earn and your friend gets VEs"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <GoldDefs id="ref" />
        <linearGradient id="ref-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6d9bff" />
          <stop offset="1" stopColor="#2a3fb0" />
        </linearGradient>
        <linearGradient id="ref-box" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5156e0" />
          <stop offset="1" stopColor="#2a2b8c" />
        </linearGradient>
        <linearGradient id="ref-ring" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3a8cf2" />
          <stop offset="1" stopColor="#a05bff" />
        </linearGradient>
        <radialGradient id="ref-glow">
          <stop offset="0" stopColor="#6a52e6" stopOpacity="0.4" />
          <stop offset="1" stopColor="#6a52e6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="290" cy="250" rx="270" ry="170" fill="url(#ref-glow)" />

      {/* stage */}
      <ellipse cx="290" cy="340" rx="190" ry="30" fill="#120f3a" />
      <ellipse cx="290" cy="340" rx="215" ry="36" fill="none" stroke="url(#ref-ring)" strokeWidth="3.5" />
      <ellipse cx="290" cy="340" rx="178" ry="27" fill="none" stroke="url(#ref-ring)" strokeOpacity="0.45" strokeWidth="2" />

      {/* man (left) */}
      <g>
        <path d="M104 334 C104 270 124 246 150 246 C176 246 196 270 196 334 Z" fill="#3f55dc" />
        <ellipse cx="150" cy="250" rx="22" ry="8" fill="#2f43b8" />
        <line x1="188" y1="266" x2="222" y2="250" stroke="#3f55dc" strokeWidth="16" strokeLinecap="round" />
        <circle cx="228" cy="247" r="8" fill="#f3b58b" />
        <line x1="112" y1="268" x2="114" y2="296" stroke="#3f55dc" strokeWidth="15" strokeLinecap="round" />
        <rect x="102" y="284" width="20" height="34" rx="4" fill="#101532" stroke="#6a7cff" />
        <circle cx="150" cy="208" r="28" fill="#f3b58b" />
        <path d="M121 206 C118 178 140 166 160 171 C178 176 182 194 179 206 C168 192 140 190 121 206Z" fill="#2b2342" />
        <circle cx="141" cy="210" r="2.6" fill="#2b2342" />
        <circle cx="160" cy="210" r="2.6" fill="#2b2342" />
        <path d="M142 220 Q150 228 158 220" stroke="#8a4b2e" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <ellipse cx="150" cy="334" rx="50" ry="7" fill="#0b0830" opacity="0.8" />
      </g>

      {/* woman (right) */}
      <g>
        <path d="M398 212 C394 170 430 160 450 172 C466 182 466 210 460 246 C456 260 444 264 436 264 L400 264 C396 242 400 228 398 212Z" fill="#3b2358" />
        <path d="M386 334 C386 278 404 254 430 254 C456 254 474 278 474 334 Z" fill="#7a4fdc" />
        <line x1="412" y1="272" x2="392" y2="294" stroke="#7a4fdc" strokeWidth="15" strokeLinecap="round" />
        <circle cx="390" cy="297" r="8" fill="#f0ad88" />
        <rect x="372" y="276" width="20" height="34" rx="4" fill="#101532" stroke="#a98bff" transform="rotate(-12 382 293)" />
        <circle cx="430" cy="214" r="26" fill="#f0ad88" />
        <path d="M404 210 C406 190 440 184 456 202 C444 198 420 200 404 210Z" fill="#3b2358" />
        <circle cx="421" cy="216" r="2.5" fill="#2b2342" />
        <circle cx="439" cy="216" r="2.5" fill="#2b2342" />
        <path d="M422 226 Q430 233 438 226" stroke="#8a4b2e" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <ellipse cx="430" cy="334" rx="48" ry="7" fill="#0b0830" opacity="0.8" />
      </g>

      {/* gift (bounces gently) */}
      <g className={styles.gift}>
        <rect x="235" y="226" width="110" height="84" rx="6" fill="url(#ref-box)" />
        <rect x="225" y="198" width="130" height="32" rx="6" fill="#6368ee" />
        <rect x="272" y="198" width="36" height="112" fill="url(#ref-gold)" />
        <path d="M290 198 C262 148 222 176 258 198 Z" fill="url(#ref-gold)" stroke="#b9852c" />
        <path d="M290 198 C318 148 358 176 322 198 Z" fill="url(#ref-gold)" stroke="#b9852c" />
        <circle cx="290" cy="198" r="10" fill="url(#ref-gold)" stroke="#b9852c" />
      </g>

      {/* reward panel (numbers count up when the card scrolls into view) */}
      <g transform="translate(178 286)">
        <rect width="224" height="58" rx="14" fill="#12163f" fillOpacity="0.94" stroke="#3b4aa8" />
        <line x1="112" y1="12" x2="112" y2="46" stroke="#3b4aa8" />
        <text x="14" y="18" fontSize="10" fill="#aab3dd">You Earn</text>
        <g transform="translate(24 38)"><Coin id="ref" r={9} label="V" /></g>
        <text x="40" y="45" fill="#fff" fontWeight="800">
          <tspan fontSize="17">{earn}</tspan>
          <tspan fontSize="11" dx="3" fill="#f3d27a">VEs</tspan>
        </text>
        <text x="126" y="18" fontSize="10" fill="#aab3dd">Your Friend Gets</text>
        <g transform="translate(136 38)"><Coin id="ref" r={9} label="V" /></g>
        <text x="152" y="45" fill="#fff" fontWeight="800">
          <tspan fontSize="17">{friend}</tspan>
          <tspan fontSize="11" dx="3" fill="#f3d27a">VEs</tspan>
        </text>
      </g>
      <g transform="translate(196 352)">
        <rect width="188" height="28" rx="14" fill="#1a1a55" stroke="#6b6bff" />
        <text x="94" y="18" textAnchor="middle" fontSize="11" fill="#e9ebff">More Friends, More Rewards!</text>
      </g>

      {/* referral code (real HTML button inside the SVG so it is keyboard accessible) */}
      <foreignObject x="185" y="56" width="220" height="76">
        <div className={styles.codeCard}>
          <span className={styles.codeLabel}>Your Referral Code</span>
          <div className={styles.codeRow}>
            <code className={styles.code}>{REFERRAL_DEMO.code}</code>
            <button
              type="button"
              className={styles.copyBtn}
              onClick={() => copyCode(REFERRAL_DEMO.code)}
              aria-label={copied ? 'Referral code copied' : 'Copy referral code'}
            >
              {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
            </button>
          </div>
        </div>
      </foreignObject>

      {/* floating V coins + tiles + sparkles */}
      <VCoin x={108} y={96} />
      <VCoin x={500} y={84} delay={-1.4} />
      <VCoin x={60} y={310} r={24} delay={-2.2} />
      <VCoin x={512} y={318} delay={-0.8} />
      <rect x="44" y="160" width="50" height="50" rx="12" fill="#1c2a78" stroke="#5b7bff" />
      <g transform="translate(69 185)" fill="none" stroke="#bcd0ff" strokeWidth="2" strokeLinecap="round">
        <circle cx="-3" cy="-5" r="5" />
        <path d="M-12 11 c0 -6 5 -8 9 -8" />
        <path d="M8 -2 v12 M2 4 h12" />
      </g>
      <rect x="478" y="222" width="46" height="46" rx="12" fill="#1c2a78" stroke="#5b7bff" />
      <path d="M492 252 c0 -10 8 -14 18 -14 v-5 l10 9 l-10 9 v-5 c-8 0 -14 2 -18 6Z" fill="#8fb0ff" />
      <Diamond x={300} y={30} c="#b56bff" />
      <Diamond x={520} y={150} delay={0.9} />
      <Diamond x={38} y={110} c="#b56bff" delay={1.5} />
      <Diamond x={90} y={250} delay={0.4} />
    </svg>
  );
}

function FeatureStrip() {
  return (
    <ul className={styles.strip}>
      {REFER_FEATURES.map((f) => {
        const Icon = FEATURE_ICONS[f.key];
        return (
          <li key={f.key} className={styles.feature}>
            <span className={`${styles.fIcon} ${styles[f.key]}`}>
              <Icon size={20} aria-hidden="true" />
            </span>
            <span className={styles.fText}>
              <strong>{f.title}</strong>
              <small>{f.text}</small>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default function ReferEarnBanner() {
  return (
    <RewardBanner
      theme={styles.theme}
      headingId="refer-heading"
      eyebrow={
        <span className={styles.badge}>
          <Users size={16} aria-hidden="true" /> {copy.badge}
        </span>
      }
      heading={
        <>
          <span className={styles.line}>{copy.headingTop}</span>
          <span className={`${styles.line} ${styles.accent}`}>{copy.headingAccent}</span>
        </>
      }
      description={copy.description}
      cta={{ label: copy.cta, to: ROUTES.refer, icon: 'arrow', variant: 'gradient' }}
      secondary={
        <Link to={ROUTES.howRefer} className={styles.secondary}>
          <Gift size={18} aria-hidden="true" /> {copy.secondary}
        </Link>
      }
      illustration={<Illustration />}
      footer={<FeatureStrip />}
    />
  );
}
