import Link from 'next/link';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      <Link href="#hero">00_HERO</Link>
      <Link href="#experience">01_EXPERIENCE</Link>
      <Link href="#projects">02_PROJECTS</Link>
      <Link href="#contact">03_CONTACT</Link>
    </nav>
  );
};

export default Navigation;
