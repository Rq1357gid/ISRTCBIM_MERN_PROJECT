import React from 'react';
import { motion } from 'framer-motion';
import ActionAreaCard from './ActionAreaCard';
import CardE from './CardE';
import CardT from './CardT';

const AnimatedCard = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.1 }} // Example animation on hover
    transition={{ duration: 0.3 }}
    style={{ margin: '20px 10px' }} // Adjust spacing as needed
  >
    {children}
  </motion.div>
);

const RowOfAnimatedCards = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <AnimatedCard>
      <ActionAreaCard />
    </AnimatedCard>
    <AnimatedCard>
      <CardE />
    </AnimatedCard>
    <AnimatedCard>
      <CardT />
    </AnimatedCard>
  </div>
);

export default RowOfAnimatedCards;
