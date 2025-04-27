import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

function AnimatedTransition({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedTransition; 