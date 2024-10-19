import React, { useEffect } from "react";
import "./SettingsTab.css";
import FieldsetLayout from "../../../../layouts/Fieldset/FieldsetLayout";
import BtnsAddDelete from "../../../../components/BtnsAddDelete/BtnsAddDelete";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMentorCourse,
  updateMentorCourse,
} from "../../../../../../store/slices/mentorSlice";
import { useForm } from "react-hook-form";
import MarkDown from "../../../../components/MarkDown/MarkDown";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function SettingsTab() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.mentor.currentCourse.apiData);
  const {
    apiData: { results },
  } = useSelector((state) => state.mentor.taughtCourses);
  const { handleSubmit, setValue, watch } = useForm({ defaultValues: result });

  function saveSettingsHandler(data) {
    const course = { ...result, ...data };
    dispatch(updateMentorCourse({ newCourse: course }));
  }

  function deleteHandler() {
    dispatch(deleteMentorCourse({ data: { id: courseId } })).then(
      ({ payload }) => {
        if (!payload.error) {
          toast.warning("Course has been deleted!");
          navigate("../..");
        }
      }
    );
  }

  const status = watch("status");
  const previewRequirements = watch("requirements", "# Requirements");
  const previewTargetAudience = watch("targetAudience", "# Target Audience");

  return (
    <div className="course-settings-tab">
      <header className="my-4 d-flex justify-content-between align-items-center flex-wrap column-gap-2">
        <h3>Course Settings</h3>
        <BtnsAddDelete
          onSave={handleSubmit(saveSettingsHandler)}
          onDelete={handleSubmit(deleteHandler)}
        />
      </header>
      <div className="settings-tab-body">
        <h4 className="sectionTitle">Basic Settings</h4>
        <FieldsetLayout title="Course Status">
          <button
            onClick={() => setValue("status", true)}
            className={`btn ${status ? "btn-primary" : ""}`}
          >
            {status && "Course is "} Active
          </button>
          <button
            onClick={() => setValue("status", false)}
            className={`btn ${!status ? "btn-danger" : ""}`}
          >
            {!status && "Course is "} UnActive
          </button>
        </FieldsetLayout>
        <FieldsetLayout title={"Requirements"}>
          {/* What are the requirements for taking your course? */}
          <MarkDown
            setter={setValue}
            value={previewRequirements}
            name="requirements"
          />
        </FieldsetLayout>
        <FieldsetLayout title="Target Audience">
          {/* placeholder={`Who is this course for?`} */}
          <MarkDown
            setter={setValue}
            value={previewTargetAudience}
            name="targetAudience"
          />
        </FieldsetLayout>
      </div>
    </div>
  );
}
