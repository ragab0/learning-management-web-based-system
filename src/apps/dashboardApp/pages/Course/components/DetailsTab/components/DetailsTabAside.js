import React, { useEffect, useState } from "react";
import "./DetailsTabAside.css";
import FieldsetLayout from "../../../../../layouts/Fieldset/FieldsetLayout";
import CreatableSelect from "react-select/creatable";
import { Controller, useFormContext } from "react-hook-form";

const levels = ["beginner", "intermediate", "advanced"];
const languages = ["arabic", "english"];
const manyValuesSections = [
  {
    title: "languages",
    name: "languages",
    options: languages,
  },
  {
    title: "course levels",
    name: "levels",
    options: levels,
  },
  {
    title: "CC languages",
    name: "subtitles",
    options: languages,
  },
  {
    title: "tags",
    name: "tags",
    options: [
      "programming",
      "web development",
      "data science",
      "html",
      "css",
      "js",
      "react",
      "nodejs",
      "bootstrap",
    ],
  },
];

export default function DetailsTabAside({ result }) {
  const { control, setValue } = useFormContext();
  const [isLoading, setIsLoading] = useState(true);
  const [options] = useState(() =>
    manyValuesSections.reduce((acc, section) => {
      acc[section.name] = section.options;
      return acc;
    }, {})
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve(result), 1000)
      );

      // Set options and default valuesx
      Object.keys(response).forEach((key) => {
        setValue(key, response[key]); // Set as array of strings like in db (schema);
      });
      setIsLoading(false);
    };

    fetchData();
  }, [setValue, result]);

  return (
    <div className="details-tab-aside h-auto">
      <div className="multi-select-container text-capitalize">
        {manyValuesSections.map(
          ({ title, name, options: defaultMenuOptions }) => (
            <FieldsetLayout title={title} key={name} mandatory={true}>
              <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                  <CreatableSelect
                    value={value?.map((v) => ({ value: v, label: v }))} // Convert strings to objects for react-select ......
                    onChange={(newValue) =>
                      onChange(
                        newValue.map((v) => v.value?.toLocaleLowerCase())
                      )
                    } // Convert back to array of strings
                    inputRef={ref}
                    options={options[name]?.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                    isMulti
                    placeholder={`Select or create ${name}...`}
                    isClearable
                    isSearchable
                    isLoading={isLoading}
                  />
                )}
              />
            </FieldsetLayout>
          )
        )}
      </div>
    </div>
  );
}
