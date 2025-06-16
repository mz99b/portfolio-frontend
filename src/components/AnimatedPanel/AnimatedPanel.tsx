'use client'; // Framer Motion components use client-side features

import React from 'react';
import { motion } from 'framer-motion';

type AnimatedPanelProps = {
  children: React.ReactNode;
};

const AnimatedPanel = ({ children }: AnimatedPanelProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // État initial: invisible et légèrement décalé vers le bas
      whileInView={{ opacity: 1, y: 0 }} // État final: visible et à sa position normale
      viewport={{ once: true, amount: 0.2 }} // L'animation se déclenche une seule fois, quand 20% du panneau est visible
      transition={{ duration: 0.6, ease: 'easeOut' }} // Durée et courbe de l'animation
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPanel;
