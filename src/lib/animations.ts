import { Variants } from 'framer-motion';

// Simple fade in (upwards optional) with customizable delay & distance
export const fadeIn = (delay: number = 0, y: number = 0): Variants => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0.0, 0.2, 1], delay }
  }
});

// Slide up variant (enter from slight downward offset)
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

// Staggered container for children using the 'show' variant on each child
export const staggerContainer = (stagger: number = 0.12, delayChildren: number = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    }
  }
});

// Convenience alias if you prefer an object style import
export const variants = { fadeIn, slideUp, staggerContainer };
