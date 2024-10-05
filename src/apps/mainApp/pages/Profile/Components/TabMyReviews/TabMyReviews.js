import React from "react";
import "./TabMyReviews.css";
import { Link } from "react-router-dom";

const reviewsData = [
  {
    courseName: "Beginner's Guide to Design",
    rating: 5,
    reviewText:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
    profileIconSrc: "",
  },
  {
    courseName: "Beginner's Guide to Design",
    rating: 5,
    reviewText:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
    profileIconSrc: "",
  },
  {
    courseName: "Beginner's Guide to Design",
    rating: 5,
    reviewText:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
    profileIconSrc: "",
  },
  {
    courseName: "Beginner's Guide to Design",
    rating: 5,
    reviewText:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
    profileIconSrc: "",
  },
  {
    courseName: "Beginner's Guide to Design",
    rating: 5,
    reviewText:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
    profileIconSrc: "",
  },
];

export default function TabMyReviews() {
  return (
    <div className="tab-reviews">
      <div className="reviews">
        {reviewsData.map(
          ({ courseName, rating, reviewText, profileIconSrc }, i) => (
            <article key={i} className="reviewProfile">
              <div className="content">
                <header className="courseInfo">
                  <h2 className="courseLabel">Course Name:</h2>
                  <p className="courseTitle">{courseName}</p>
                </header>
                <div className="ratingContainer">
                  <span className="ratingLabel">Rating:</span>
                  <img
                    src={`http://b.io/ext_${rating}-`}
                    className="ratingStars"
                    alt={`${rating} star rating`}
                  />
                </div>
                <div className="reviewContainer">
                  <h3 className="reviewLabel">Review:</h3>
                  <p className="reviewText">{reviewText}</p>
                </div>
              </div>
              <img
                src={profileIconSrc}
                className="profileIcon"
                alt="User profile icon"
              />
            </article>
          )
        )}
      </div>
    </div>
  );
}
