import React from "react";
import "./HomePage.css";
import Header from "./components/Header/Header";
import Statistics from "./components/Statistics/Statistics";
import TopCategories from "./components/TopCategories/TopCategories";
import LineOfCourses from "../../components/LineOfCourses/LineOfCourses";
import CustomerComments from "../../components/CustomerComments/CustomerComments";
import InstructorsOverview from "./components/InstructorsOverview/InstructorsOverview";
import LineOfInstructors from "../../components/LineOfInstructors/LineOfInstructors";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

const ScrollAnimatedSection = ({ children, animationVariants }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};

export default function HomePage() {
  return (
    <div className="home-page">
      <ScrollAnimatedSection animationVariants={fadeUp}>
        <Header />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection animationVariants={scaleIn}>
        <Statistics />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection animationVariants={fadeUp}>
        <TopCategories />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection animationVariants={fadeUp}>
        <LineOfCourses title="Top Courses" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection animationVariants={scaleIn}>
        <LineOfInstructors title="Top Instructors" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection animationVariants={fadeUp}>
        <CustomerComments />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection animationVariants={scaleIn}>
        <InstructorsOverview />
      </ScrollAnimatedSection>
    </div>
  );
}
