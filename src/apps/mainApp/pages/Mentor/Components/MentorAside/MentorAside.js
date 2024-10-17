import React, { useState, useEffect } from "react";
import "./MentorAside.css";
import { Link } from "react-router-dom";
import MentorImg from "../../../../../../assets/mentorsImgs/mentor2.png";
import Skeleton from "react-loading-skeleton";

export default function MentorAside() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2500));
      setLoading(false);
    };

    fetchData();
  }, []);

  const SkeletonLoader = () => (
    <aside className="aside mentor-aside">
      <div className="aside-content text-center">
        <div className="img-wrapper">
          <Skeleton circle height={100} width={100} />
        </div>
        <ul className="d-flex flex-column gap-2">
          {[...Array(3)].map((_, index) => (
            <li key={index}>
              <Skeleton height={50} width="100%" />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );

  return loading ? (
    <SkeletonLoader />
  ) : (
    <aside className="aside mentor-aside">
      <div className="aside-content text-center">
        <div className="img-wrapper">
          <img alt="profile-img" src={MentorImg} />
        </div>
        <ul className="d-flex flex-column gap-2">
          <li>
            <Link to={"#"} className="btn btn-outline-dark py-3 w-100 disabled">
              Website
            </Link>
          </li>
          <li>
            <Link to={"#"} className="btn btn-outline-dark py-3 w-100 disabled">
              Linkedin
            </Link>
          </li>
          <li>
            <Link to={"#"} className="btn btn-outline-dark py-3 w-100 disabled">
              Youtube
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
