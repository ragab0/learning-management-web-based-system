import React, { useState, useEffect } from "react";
import "./MentorMainContent.css";
import Skeleton from "react-loading-skeleton";

const instructorData = {
  name: "Ronald Richards",
  title: "Web developer, UX/UI Designer, and Teacher",
  totalStudents: 1000,
  reviews: 154,
  about:
    "Ronald Richard is a highly skilled UX/UI Designer with over a decade of experience in crafting user-centric digital solutions. With a background in graphic design and a keen eye for detail, Ronald specializes in creating intuitive interfaces that delight users and drive business results.",
  expertise: [
    "User Experience (UX) Design",
    "User Interface (UI) Design",
    "Information Architecture",
    "Interaction Design",
    "Visual Design",
    "Usability Testing",
    "Wireframing and Prototyping",
    "Design Thinking",
  ],
  experience:
    "Ronald Richard has an extensive professional background in UX/UI design, having worked with renowned companies such as [Company Name] and [Company Name]. His portfolio includes a diverse range of projects spanning web applications, mobile apps, and e-commerce platforms.",
};

export default function MentorMainContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  // Skeleton loader
  const SkeletonLoader = () => (
    <div className="mentor-main-content">
      <header className="instructor-header">
        <span className="instructor-label">
          <Skeleton width={100} />
        </span>
        <h1 className="instructorName">
          <Skeleton height={30} />
        </h1>
        <p className="instructorTitle">
          <Skeleton width={200} />
        </p>
        <div className="instructor-header-stats">
          <div>
            <span>Total Students</span>
            <h5>
              <Skeleton width={50} />
            </h5>
          </div>
          <div>
            <span>Reviews</span>
            <h5>
              <Skeleton width={50} />
            </h5>
          </div>
        </div>
      </header>
      <section className="instructor-about">
        <h2>
          About <Skeleton width={100} />
        </h2>
        <p>
          <Skeleton count={3} />
        </p>
      </section>
      <section className="instructor-expertise">
        <h2 className="h-4 ">
          Areas of Expertise
        </h2>
        <ul>
          {Array.from({ length: 8 }).map((_, i) => (
            <li key={i}>
              <Skeleton width={200} />
            </li>
          ))}
        </ul>
      </section>
      <section className="instructor-experience">
        <h2 className="h-4 ">Professional Experience</h2>
        <p>
          <Skeleton count={3} />
        </p>
      </section>
    </div>
  );

  return (
    <main className="mentor-main-content">
      {loading ? (
        <SkeletonLoader />
      ) : (
        <>
          <header className="instructor-header">
            <span className="instructor-label">Instructor</span>
            <h1 className="instructorName">{instructorData.name}</h1>
            <p className="instructorTitle">{instructorData.title}</p>
            <div className="instructor-header-stats">
              <div>
                <span>Total Students</span>
                <h5>{instructorData.totalStudents}</h5>
              </div>
              <div>
                <span>Reviews</span>
                <h5>{instructorData.reviews}</h5>
              </div>
            </div>
          </header>
          <section className="instructor-about">
            <h2>About {instructorData.name}</h2>
            <p>{instructorData.about}</p>
          </section>
          <section className="instructor-expertise">
            <h2 className="h-4 ">Areas of Expertise</h2>
            <ul>
              {instructorData.expertise.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </section>
          <section className="instructor-experience">
            <h2 className="h-4 ">Professional Experience</h2>
            <p>{instructorData.experience}</p>
          </section>
        </>
      )}
    </main>
  );
}
