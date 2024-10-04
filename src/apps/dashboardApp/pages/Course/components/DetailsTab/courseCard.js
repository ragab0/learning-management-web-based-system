import React, { useState } from "react";
import "./courseCard.css";

const CourseCard = () => {
  const [language, setLanguage] = useState("English");
  const [ccLanguages, setCcLanguages] = useState(["English", "Spanish"]);
  const [level, setLevel] = useState("Beginner");

  return (
    <div className="course-card">
      <div className="course-price">
        <label>Course Price</label>
        <p>$199.00</p>
      </div>

      <div className="course-language">
        <label>Language</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
        </select>
      </div>

      <div className="course-cc">
        <label>CC</label>
        <div className="cc-languages">
          {ccLanguages.map((lang, index) => (
            <div key={index} className="cc-language">
              {lang}{" "}
              <button
                onClick={() =>
                  setCcLanguages(ccLanguages.filter((l) => l !== lang))
                }
              >
                &#x274c;
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="course-level">
        <label>Level</label>
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
    </div>
  );
};

export default CourseCard;
