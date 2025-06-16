import styles from './HeroSection.module.scss';

const HeroSection = () => {
  const title = "Matthieu Burger";
  return (
    <section id="hero" className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1>
          <span className="glitch" data-text={title}>
            {title}
          </span>
        </h1>
        <h2>Concepteur d'Application Web & Développeur Full-Stack</h2>
        <p>
          Développeur indépendant, très motivé afin d'intégrer et d'apprendre au sein d'une entreprise. Curieux et intéressé, je saurais être à l'écoute des missions qu'on me propose afin de progresser et de faire avancer l'entreprise !
        </p>
      </div>
      <div className={styles.threeContainer}>
        {/* Ce conteneur est prêt pour la scène three.js */}
      </div>
    </section>
  );
};

export default HeroSection;
