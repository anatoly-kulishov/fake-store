import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

import { useScrollY } from '@/hooks/useScrollY';
import ButtonIcon from '@/components/ui/button-icon';

import styles from './Up.module.scss';

export const Up = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div className={styles.up} animate={controls} initial={{ opacity: 0 }}>
      <ButtonIcon appearance="primary" aria-label="Go up" onClick={scrollToTop} icon="up" />
    </motion.div>
  );
};