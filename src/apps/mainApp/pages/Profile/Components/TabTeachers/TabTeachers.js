import React from "react";
import "./TabTeachers.css";
import Teacher from "../../../../../../assets/mentorsImgs/mentor3.png";

const teachersData = [
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
  { name: "Ronald Richards", role: "UI/UX Designer", img: Teacher },
];

export default function TabTeachers() {
  return (
    <div className="tab-teachers">
      <div className="teachers">
        {teachersData.map((teacher, index) => (
          <div key={index} className="teacher">
            <img src={teacher.img} alt={teacher.name} />
            <h2 className=" mt-3 fs-5">{teacher.name}</h2>
            <h6 className=" fs-6">{teacher.role}</h6>
            <button className=" mt-4 bg-info">
              Send Message
              <i className="fa-regular fa-envelope"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
