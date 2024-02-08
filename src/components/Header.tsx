import styles from './Header.module.css';
import IgniteSVG from '../assets/Ignite';
export function Header() {
  return (
    <div className={styles.header}>
      <IgniteSVG />
    </div>
  );
}
