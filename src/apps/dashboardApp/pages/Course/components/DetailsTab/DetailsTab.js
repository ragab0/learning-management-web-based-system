import React from "react";
import "./DetailsTab.css";
import DetailsTabAside from "./components/DetailsTabAside";
import FieldsetLayout from "../../../../layouts/Fieldset/FieldsetLayout";
import BtnsAddDelete from "../../../../components/BtnsAddDelete/BtnsAddDelete";
import MDEditor from "@uiw/react-md-editor";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateMentorCourse } from "../../../../../../store/slices/mentorSlice";
import MarkDown from "../../../../components/MarkDown/MarkDown";

export default function DetailsTab() {
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.mentor.currentCourse.apiData);
  const methods = useForm({
    defaultValues: async () => result,
  });

  function saveHandler(data) {
    const course = { description: null, ...result, ...data };
    dispatch(updateMentorCourse({ newCourse: course }));
  }

  const preview = methods.watch("description", "# Description...");

  return (
    <FormProvider {...methods}>
      <div className="details-tab">
        <header className="my-4 d-flex justify-content-between align-items-center flex-wrap gap-x-2 column-gap-2">
          <h3>Course Details</h3>
          <BtnsAddDelete
            onSave={methods.handleSubmit(saveHandler)}
            hideDeleteBtn={true}
          />
        </header>
        <div className="details-tab-body row">
          <div className="details-tab-content col-lg-8">
            <FieldsetLayout title="Course Title" mandatory={true}>
              <input
                {...methods.register("title")}
                type="text"
                className="form-control bg-white"
                placeholder="UnTitled Course!"
              />
            </FieldsetLayout>
            <FieldsetLayout title="Course Hook Title" mandatory={true}>
              <input
                {...methods.register("titleHook")}
                type="text"
                className="form-control bg-white"
                placeholder="UnTitled Course!"
              />
            </FieldsetLayout>
            <FieldsetLayout title="Course Image source">
              <input
                {...methods.register("photo")}
                type="url"
                className="form-control bg-white"
                placeholder="Image source (URL)"
              />
            </FieldsetLayout>
            <FieldsetLayout title="Course Description" mandatory={true}>
              {/* <textarea
                {...methods.register("description")}
                className="form-control"
                rows={10}
                placeholder="UnDescripted Course!"
              ></textarea> */}
              <MarkDown
                setter={methods.setValue}
                value={preview}
                name="description"
              />
            </FieldsetLayout>
          </div>
          <div className="details-tab-aside col-lg-4">
            <DetailsTabAside result={result} />
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
