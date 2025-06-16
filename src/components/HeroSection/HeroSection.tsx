import styles from './HeroSection.module.scss';
import AvatarScene from '../AvatarScene/AvatarScene';

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
        <h2>Concepteur d&apos;Application Web & Développeur Full-Stack</h2>
        <p>
          Développeur indépendant, très motivé afin d&apos;intégrer et d&apos;apprendre au sein d&apos;une entreprise. Curieux et intéressé, je saurais être à l&apos;écoute des missions qu&apos;on me propose afin de progresser et de faire avancer l&apos;entreprise !
        </p>
      </div>
      <div className={styles.threeContainer}>
        <AvatarScene />
      </div>
    </section>
  );
};

export default HeroSection;
