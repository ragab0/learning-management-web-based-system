import React, { useEffect, useState } from "react";
import "./SettingsTab.css";
import { useForm, Controller } from "react-hook-form";
import FieldsetLayout from "../../../../layouts/Fieldset/FieldsetLayout";
import Select from "react-select";

const options = [
  { value: true, label: "Active" },
  { value: false, label: "UnActive" },
];

export default function SettingsTab() {
  const [apiData, setApiData] = useState({ isActive: false });
  const { control } = useForm();

  useEffect(() => {
    const fetchStatus = async () => {
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ isActive: true }), 500)
      );
      setApiData(response);
    };

    fetchStatus();
  }, []);

  return (
    <div className="course-settings-tab">
      <h1 className="title">Settings</h1>
      <h2 className="sectionTitle">Basic Settings</h2>
      <FieldsetLayout title="Course Status">
        <Controller
          name="isActive"
          control={control}
          defaultValue={options.find(
            (option) => option.value === apiData.isActive
          )}
          render={({ field }) => (
            <Select
              {...field}
              options={options}
              placeholder="Select status..."
              isSearchable={false}
            />
          )}
        />
      </FieldsetLayout>
      <FieldsetLayout title={"Requirements"}>
        <textarea
          name="description"
          rows="5"
          className="form-control"
          placeholder={`What are the requirements for taking your course? separated with && \nExample: HTML && CSS && JavaScript`}
        ></textarea>
      </FieldsetLayout>
      <FieldsetLayout title="Target Audience">
        <textarea
          name="targetsDescription"
          rows="5"
          className="form-control"
          placeholder={`Who is this course for? separated with && \nExample: front-end && back-end`}
        ></textarea>
      </FieldsetLayout>
    </div>
  );
}
