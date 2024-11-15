import React, { useEffect } from "react";
import "./MentorPage.css";
import MentorMainContent from "./Components/MentorMainContent/MentorMainContent";
import MentorAside from "./Components/MentorAside/MentorAside";
import LearnerReviews from "../../components/LearnerReviews/LearnerReviews";
import LineOfCourses from "../../components/LineOfCourses/LineOfCourses";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMentorBasicProfile } from "../../../../store/slices/mentorSlice";
import NoContent from "../../../../components/NoContent/NoContent";

export default function MentorPage() {
  const { mentorId } = useParams();
  const dispatch = useDispatch();
  const {
    isInitialized,
    loading,
    error,
    apiData: { result = [] },
  } = useSelector((state) => state.mentor.basicProfile);

  useEffect(
    function () {
      dispatch(fetchMentorBasicProfile({ id: mentorId }));
    },
    [dispatch, mentorId]
  );

  return (
    <div className="mentor-page">
      {error ? (
        <NoContent />
      ) : (
        <div className="content-aside-layout container">
          <MentorMainContent />
          <MentorAside />
        </div>
      )}
      {/* <ScrollAnimatedSection animationVariants={fadeUp}>
        <LineOfCourses title={`More Courses by ${"Ronald"}`} />
      </ScrollAnimatedSection> */}
      <ScrollAnimatedSection animationVariants={fadeUp}>
        <div className="container">
          <LearnerReviews />
        </div>
      </ScrollAnimatedSection>
    </div>
  );
}

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
