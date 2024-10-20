import React from "react";
import "./FormProfile.css";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateStudentBasicProfile } from "../../store/slices/studentSlice";
import { updateMentorBasicProfile } from "../../store/slices/mentorSlice";
import FormError from "../FormError/FormError";
import MarkDown from "../../apps/dashboardApp/components/MarkDown/MarkDown";
import FieldsetLayout from "../../apps/dashboardApp/layouts/Fieldset/FieldsetLayout";
import Skeleton from "react-loading-skeleton";

// const supportedLanguages = ["english", "arabic"];

const links = [
  {
    name: "website",
    heading: "Website",
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

export default function FormProfile({ ofRole = "student" }) {
  const dispatch = useDispatch();
  const { user, loading, itInitialized } = useSelector(
    (state) => state.auth.login
  );
  const { language: activeLang, email } = user || {};

  const {
    register,
    // setValue,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useForm({ values: user });

  // const language = watch("language", activeLang);

  async function submitHandler(data) {
    if (ofRole === "mentor") {
      dispatch(updateMentorBasicProfile(data));
    } else if (ofRole === "student") {
      dispatch(updateStudentBasicProfile(data));
    } else {
      console.error("bro, don't play with role ^_^");
    }
  }

  const descriptionPreview = watch("description");

  if (!itInitialized && loading) {
    return <Skel />;
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
        <FieldsetLayout title="Basic Info">
          <section className="w-100">
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
        </FieldsetLayout>
        {/* <section>
          <label className="d-block mb-4">Image Preview</label>
          <div className="profile-preview">

          </div>
        </section> */}
        <FieldsetLayout title="Links">
          <section className="links-section">
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
        </FieldsetLayout>
        <FieldsetLayout title={"description"}>
          {
            <section className="mentor-description">
              <MarkDown
                name="description"
                setter={setValue}
                value={descriptionPreview}
              />
            </section>
          }
        </FieldsetLayout>

        <button
          className={`btn btn-dark w-100 d-block py-3 fw-bold ${
            loading ? "disabled" : ""
          }`}
        >
          Save
        </button>
      </form>

      <DevTool control={control} />
    </div>
  );
}

function Skel() {
  return (
    <div>
      {[...Array(3)].map((_, i) => (
        <section key={i} className=" mb-4">
          <Skeleton height={30} width={200}></Skeleton>
          {[...Array(10)].map((_, i) => (
            <Skeleton key={i} height={30} />
          ))}
        </section>
      ))}
    </div>
  );
}
