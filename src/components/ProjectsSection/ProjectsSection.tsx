import styles from './ProjectsSection.module.scss';

const projects = [
  { name: 'Système de Gestion Rebstoeckel', url: 'rebstoeckel.fr' },
  { name: 'Plateforme Sociale "Food"', url: 'food.mztthieu.fr' },
  { name: 'Assistant Tactique IA Valorant', url: 'a-igl.com' },
  { name: 'Potentiel.studio', url: 'potentiel.studio' },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className={styles.projectsContainer}>
      <div className={styles.sectionContent}>
        <ul className={styles.projectsList}>
          {projects.map((project) => (
            <li key={project.name}>
              <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
