import React from "react";
import "./MentorPage.css";
import MentorMainContent from "./Components/MentorMainContent/MentorMainContent";
import MentorAside from "./Components/MentorAside/MentorAside";
import LearnerReviews from "../../components/LearnerReviews/LearnerReviews";
import LineOfCourses from "../../components/LineOfCourses/LineOfCourses";
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

export default function MentorPage() {
  return (
    <div className="mentor-page">
      <div className="content-aside-layout container">
        <MentorMainContent />
        <MentorAside />
      </div>
      <ScrollAnimatedSection animationVariants={fadeUp}>
        <LineOfCourses title={`More Courses by ${"Ronald"}`} />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animationVariants={fadeUp}>
        <div className="container">
          <LearnerReviews />
        </div>
      </ScrollAnimatedSection>
    </div>
  );
}
