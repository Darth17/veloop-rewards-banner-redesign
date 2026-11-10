import { Link } from 'react-router-dom';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import { FaAngleDoubleRight } from 'react-icons/fa';
import useInView from '../../hooks/useInView';
import styles from './RewardBanner.module.css';

const CTA_ICONS = { arrow: FiArrowRight, chevron: FiChevronRight, chevrons: FaAngleDoubleRight };
const CTA_VARIANTS = {
  gold: styles.ctaGold, // label + chevron
  goldSplit: styles.ctaGoldSplit, // dark icon block on the left, then label
  goldPill: styles.ctaGoldPill, // pill with dark round arrow on the right
  gradient: styles.ctaGradient, // blue -> violet
};

/**
 * Reusable banner shell. It owns: size rules (desktop/tablet/mobile heights),
 * the grid layout, the CTA (with hover/active/focus states), the "whole card is
 * clickable" behaviour and pausing animations while off-screen.
 *
 * Each banner passes its own theme class, illustration and copy, so the
 * architecture is shared but the look of every banner stays unique.
 */
export default function RewardBanner({
  theme,
  headingId,
  eyebrow,
  heading,
  divider,
  description,
  cta, // { label, to, icon, variant }
  secondary,
  extra,
  illustration,
  footer,
}) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const Icon = CTA_ICONS[cta.icon ?? 'arrow'];
  const variant = CTA_VARIANTS[cta.variant ?? 'gold'];
  const iconFirst = cta.variant === 'goldSplit';
  const icon = (
    <span className={styles.ctaIcon} aria-hidden="true">
      <Icon size={18} />
    </span>
  );

  return (
    <article
      ref={ref}
      className={`${styles.card} ${theme}`}
      data-inview={inView}
      aria-labelledby={headingId}
    >
      <div className={`${styles.body} ${footer ? styles.hasFooter : ''}`}>
        <div className={styles.content}>
          {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
          <h2 id={headingId} className={styles.heading}>
            {heading}
          </h2>
          {divider && <div className={styles.divider}>{divider}</div>}
          <p className={styles.description}>{description}</p>
          <div className={styles.actions}>
            <Link to={cta.to} className={`${styles.cta} ${variant}`}>
              {iconFirst && icon}
              <span>{cta.label}</span>
              {!iconFirst && icon}
            </Link>
            {secondary}
          </div>
          {extra && <div className={styles.extra}>{extra}</div>}
        </div>
        <div className={styles.visual}>{illustration}</div>
      </div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </article>
  );
}
