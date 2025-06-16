import styles from './ExperienceSection.module.scss';

type Job = {
  role: string;
  company: string;
  period: string;
  tasks: string[];
};

const professionalExperience: Job[] = [
  {
    role: 'Développeur Freelance / Concepteur d\'Application',
    company: 'Indépendant',
    period: 'Septembre 2022 - Aujourd\'hui',
    tasks: [
      "Développement Full-Stack du SGM pour le restaurant Rebstoeckel (React, Node.js, Prisma, MariaDB).",
      "Création d'une plateforme sociale inspirée de Twitter (Next.js, TypeScript, Prisma).",
      "Développement d'une application de caisse enregistreuse (HTML, CSS, JavaScript, PHP).",
      "Conception d'un assistant tactique IA pour Valorant (React, Node.js, Qdrant, Zustand).",
      "Développement de l'application mobile musicale Potentiel.studio (React Native, Expo).",
    ]
  },
  {
    role: 'Testeur Logiciel (Intérim)',
    company: 'UEM Metz',
    period: 'Août 2023 - Septembre 2023',
    tasks: [
      "Exécution de tests de non-régression pour le déploiement de nouvelles versions logicielles."
    ]
  },
  {
    role: 'Administrateur Réseaux et Systèmes (Stage)',
    company: 'Lycée Robert Schuman, Haguenau',
    period: 'Janvier 2022 - Février 2022',
    tasks: [
      "Développement de scripts en PowerShell pour l'automatisation.",
      "Développement web interne et gestion des tickets de support."
    ]
  },
  {
    role: 'Développeur Web (Stage)',
    company: 'CG Project Management, Strasbourg',
    period: 'Juillet 2021 - Août 2021',
    tasks: [
      "Conception et développement d'une interface administrateur en PHP, SQL, et JavaScript."
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className={styles.experienceContainer}>
      <h2>Expérience Professionnelle</h2>
      <div className={styles.jobsList}>
        {professionalExperience.map((job, index) => (
          <article key={index} className={styles.job}>
            <h3>{job.role}</h3>
            <h4>{job.company}</h4>
            <p className={styles.period}>{job.period}</p>
            <ul>
              {job.tasks.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
