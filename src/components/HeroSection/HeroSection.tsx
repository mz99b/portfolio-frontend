import styles from './HeroSection.module.scss';

const HeroSection = () => {
  return (
    <section id="hero" className={styles.heroContainer}>
      <h1>Matthieu Burger</h1>
      <h2>Concepteur d&apos;Application Web & Développeur Full-Stack</h2>
      <p>
        Développeur indépendant, très motivé afin d&apos;intégrer et d&apos;apprendre au sein d&apos;une entreprise. Curieux et intéressé, je saurais être à l&apos;écoute des missions qu&apos;on me propose afin de progresser et de faire avancer l&apos;entreprise !
      </p>
    </section>
  );
};

export default HeroSection;
