import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ourVariants = {
  fadeUp: {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
    },
  },
  scaleInSlow: {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, type: "tween", delay: 0.1 },
    },
  },
  springToLeft: {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  springToRight: {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  cardSprintToDown: {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
    },
  },
};

export default function ScrollAnimations({
  children,
  className = "",
  style = {},
  animationName = ourVariants,
  delay = 0,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }

    return function () {
      controls.stop("animate");
    };
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={ourVariants[animationName]}
      transition={{ delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
