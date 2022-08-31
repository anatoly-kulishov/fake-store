import cn from 'classnames';
import { motion } from 'framer-motion';

import ArrowIcon from '@/components/shared/icons/ArrowIcon';
import { ButtonProps } from '@/components/ui/button/Button.props';

import styles from './Button.module.scss';

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
        [styles.danger]: appearance === 'danger',
        [styles.warning]: appearance === 'warning',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
          })}
        >
          <ArrowIcon size="10" />
        </span>
      )}
    </motion.button>
  );
};
