import Link from 'next/link';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      <Link href="#hero">Accueil</Link>
      <Link href="#experience">Expérience</Link>
      <Link href="#projects">Projets</Link>
      <Link href="#contact">Contact</Link>
    </nav>
  );
};

export default Navigation;
