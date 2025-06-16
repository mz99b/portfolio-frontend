'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.scss';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={styles.navToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation"
      >
        N {/* Remplacer par une icône si souhaité */}
      </button>

      <nav className={`${styles.navContainer} ${isOpen ? styles.isOpen : ''}`}>
        <Link href="#hero" onClick={handleLinkClick}>00_HERO</Link>
        <Link href="#experience" onClick={handleLinkClick}>01_EXPERIENCE</Link>
        <Link href="#projects" onClick={handleLinkClick}>02_PROJECTS</Link>
        <Link href="#contact" onClick={handleLinkClick}>03_CONTACT</Link>
      </nav>
    </>
  );
}
