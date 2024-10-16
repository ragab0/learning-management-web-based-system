import React, { useEffect } from "react";
import "./CourseContentMain.css";
import courseVideo from "../../../../../../assets/noxe.mp4";
import Tabs from "../../../../components/Tabs/Tabs";
import InstructorTab from "../../../../components/InstructorTab/InstructorTab";
import LearnerReviews from "../../../../components/LearnerReviews/LearnerReviews";
import LineOfCourses from "../../../../components/LineOfCourses/LineOfCourses";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const tabs = ["Details", "Instructor", "Courses", "Reviews"];

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

  useEffect(() => {
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

export default function CourseContentMain() {
  return (
    <div className="course-content-main">
      <header className="flex">
        <video src={"courseVideo"} className="w-100" controls />
      </header>
      <Tabs tabs={tabs} />
      <div className="tabs-content">
        <div className="tab-content" id={tabs[0].toLocaleLowerCase()}>
          <div className="overview mt-3">
            <h3>Course Overview</h3>
            <p>
              Embark on a transformative journey into the dynamic world of User
              Experience (UX) Design with our comprehensive course,
              "Introduction to User Experience Design." This course is
              meticulously crafted to provide you with a foundational
              understanding of the principles, methodologies, and tools that
              drive exceptional user experiences in the digital landscape.
            </p>
          </div>
          <div className="key-learning mt-4">
            <h3>Key Learning Objectives</h3>
            <ul>
              <li>
                <p>
                  Gain a clear understanding of what User Experience (UX) Design
                  entails and its importance in today's digital world.
                </p>
              </li>
              <li>
                <p>
                  Explore the fundamental principles of user-centered design and
                  how to apply them to create intuitive and user-friendly
                  interfaces.
                </p>
              </li>
              <li>
                <p>
                  Learn about the various elements that contribute to a positive
                  user experience, including information architecture,
                  interaction design, and visual design.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content" id={tabs[1].toLocaleLowerCase()}>
          <InstructorTab />
        </div>
        <ScrollAnimatedSection animationVariants={fadeUp}>
          <div className="tab-content" id={tabs[2].toLocaleLowerCase()}>
            <LineOfCourses title={`More Courses`} />
          </div>
        </ScrollAnimatedSection>
        <ScrollAnimatedSection animationVariants={scaleIn}>
          <div className="tab-content" id={tabs[3].toLocaleLowerCase()}>
            <LearnerReviews />
          </div>
        </ScrollAnimatedSection>
      </div>
    </div>
  );
}
