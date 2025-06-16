import React from 'react';
import styles from './SectionPanel.module.scss';

type SectionPanelProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

const SectionPanel = ({ id, title, children }: SectionPanelProps) => {
  return (
    <section id={id} className={styles.panel}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};

export default SectionPanel;
