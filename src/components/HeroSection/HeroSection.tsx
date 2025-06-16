import styles from './HeroSection.module.scss';

const HeroSection = () => {
  return (
    <section id="hero" className={styles.heroContainer}>
      <h1>Matthieu Burger</h1>
      <h2>Concepteur d'Application Web & Développeur Full-Stack</h2>
      <p>
        Développeur indépendant, très motivé afin d'intégrer et d'apprendre au sein d'une entreprise. Curieux et intéressé, je saurais être à l'écoute des missions qu'on me propose afin de progresser et de faire avancer l'entreprise !
      </p>
    </section>
  );
};

export default HeroSection;
