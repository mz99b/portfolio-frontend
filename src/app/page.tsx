import HeroSection from '@/components/HeroSection/HeroSection';
import ExperienceSection from '@/components/ExperienceSection/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import SectionPanel from '@/components/SectionPanel/SectionPanel';
import AnimatedPanel from '@/components/AnimatedPanel/AnimatedPanel';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <HeroSection />

      <AnimatedPanel>
        <SectionPanel id="experience" title="01 // Expérience Professionnelle">
          <ExperienceSection />
        </SectionPanel>
      </AnimatedPanel>

      <AnimatedPanel>
        <SectionPanel id="projects" title="02 // Projets Sélectionnés">
          <ProjectsSection />
        </SectionPanel>
      </AnimatedPanel>

      <AnimatedPanel>
        <SectionPanel id="contact" title="03 // Contact & Liens">
          <ContactSection />
        </SectionPanel>
      </AnimatedPanel>
    </div>
  );
}
