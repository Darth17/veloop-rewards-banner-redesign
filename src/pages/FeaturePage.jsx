import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import styles from './FeaturePage.module.css';

/** Placeholder destination so every banner CTA lands on a real route. */
export default function FeaturePage({ title, blurb }) {
  return (
    <main className="container py-5">
      <Link to="/" className={styles.back}>
        <ArrowLeft size={18} aria-hidden="true" /> Back to banners
      </Link>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.blurb}>{blurb}</p>
      <p className={styles.note}>Placeholder page. Real functionality is out of scope for this task.</p>
    </main>
  );
}
