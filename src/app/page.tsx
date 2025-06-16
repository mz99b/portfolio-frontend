import HeroSection from '@/components/HeroSection/HeroSection';
import ExperienceSection from '@/components/ExperienceSection/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      {/* Laissez ExperienceSection et ContactSection vides pour l'instant */}
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
