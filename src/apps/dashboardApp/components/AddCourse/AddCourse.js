import React from "react";
import "./AddCourse.css";
import { useDispatch } from "react-redux";
import { createMentorCourse } from "../../../../store/slices/mentorSlice";
import { useNavigate } from "react-router-dom";

export default function AddCourse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addHandler() {
    dispatch(createMentorCourse()).then(({ error }) => {
      if (!error) {
        navigate("/dashboard/courses");
      }
    });
  }

  return (
    <button className="btn btn-primary" onClick={addHandler}>
      Add Course
    </button>
  );
}
