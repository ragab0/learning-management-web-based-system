import React from "react";
import "./FormProfile.css";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateStudentBasicProfile } from "../../store/slices/studentSlice";
import FormError from "../FormError/FormError";
import { updateMentorBasicProfile } from "../../store/slices/mentorSlice";

// const supportedLanguages = ["english", "arabic"];

export default function FormProfile({ ofRole = "student" }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.login);
  const { language: activeLang, email } = user || {};

  const {
    register,
    // setValue,
    control,
    handleSubmit,
    formState: { errors, isDirty },
    // watch,
  } = useForm({ values: user });

  // const language = watch("language", activeLang);

  async function submitHandler(data) {
    console.log(`data ofRole ${ofRole} is: ${data}`);
    if (ofRole === "mentor") {
      dispatch(updateMentorBasicProfile(data));
    } else if (ofRole === "student") {
      dispatch(updateStudentBasicProfile(data));
    } else {
      console.error("please don't play with role ^_^");
    }
  }

  return (
    <div className="tab-profile">
      {Object.keys(errors).length > 0 && (
        <section>
          <FormError errors={errors} />
        </section>
      )}
      <form
        onSubmit={handleSubmit(submitHandler)}
        className=" needs-validation"
      >
        <section>
          <div className="has-validation d-flex gap-4">
            <label>
              <span>first name</span>
              <input
                className="form-control py-2"
                type="text"
                {...register("fname", {
                  required: "First name mustn't be empty!",
                })}
              />
            </label>
            <label>
              <span>last name</span>
              <input
                className="form-control py-2"
                type="text"
                {...register("lname", {
                  required: "Last name mustn't be empty!",
                })}
              />
            </label>
          </div>
          <label>
            <span>headline</span>
            <input
              className="form-control py-2"
              type="text"
              {...register("headline", {
                required: "Headline mustn't be empty!",
              })}
            />
          </label>
          <label>
            <span>email</span>
            <input
              className="form-control py-2"
              type="text"
              placeholder={email}
              readOnly={true}
            />
          </label>
          <div className="description">
            <label className="w-100">
              <span>description</span>
              <input
                className="form-control py-2 pb-5"
                type="text"
                {...register("description", {
                  required: "Description mustn't be empty!",
                })}
              />
            </label>
          </div>
          <label>
            <span>photo URL</span>
            <input
              className="form-control py-2"
              type="text"
              {...register("photo")}
            />
          </label>
          {/* <Select
            label="Languages"
            options={
              language && !supportedLanguages.includes(language)
                ? [language, ...supportedLanguages]
                : supportedLanguages
            }
            value={language}
            setValue={(v) => setValue("language", v)}
          /> */}
        </section>
        {/* <section>
          <label className="d-block mb-4">Image Preview</label>
          <div className="profile-preview">

          </div>
        </section> */}
        <section className="links-section">
          <h5>Links</h5>
          {links.map(({ heading }, index) => (
            <label key={index}>
              <span>{heading}</span>
              <input
                className="form-control py-2"
                type="text"
                {...register(`links.${index}.${heading}`)}
              />
            </label>
          ))}
        </section>
        <button
          className={`btn btn-dark w-100 d-block py-3 fw-bold ${
            isDirty ? "" : "disabled"
          }`}
        >
          Save
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

const links = [
  {
    name: "website",
    heading: "Website",
    value: "https://",
  },
  {
    name: "x",
    heading: "X(Formerly Twitter)",
  },
  {
    name: "linkedin",
    heading: "LinkedIn",
  },
  {
    name: "youtube",
    heading: "YouTube",
  },
  {
    name: "facebook",
    heading: "Facebook",
  },
];
