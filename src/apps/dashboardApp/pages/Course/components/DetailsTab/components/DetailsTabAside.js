import React, { useEffect, useState } from "react";
import "./DetailsTabAside.css";
import FieldsetLayout from "../../../../../layouts/Fieldset/FieldsetLayout";
import AsyncSelect from "react-select/async";
import { useForm, Controller } from "react-hook-form";

const levels = ["All", "Beginner", "Intermediate", "Advanced"];
const languages = ["Arabic", "English"];
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
    title: "cc-languages",
    name: "subtitles",
    options: languages,
  },
];

export default function DetailsTabAside() {
  const [apiData, setApiData] = useState({
    languages: ["Arabic", "English", "English2"],
    levels: ["All", "Beginner", "Intermediate", "Advanced"],
    subtitles: ["Arabic", "English"],
  });

  const { control, setValue } = useForm({
    defaultValues: {
      languages: [],
      levels: [],
      subtitles: [],
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      // Replace this with your actual API call
      const response = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              languages: ["Arabic"],
              levels: ["Beginner", "Intermediate"],
              subtitles: ["English"],
            }),
          1000
        )
      );

      // Set default values
      Object.keys(response).forEach((key) => {
        setValue(
          key,
          response[key].map((value) => ({ value, label: value }))
        );
      });
    };

    fetchData();
  }, [setValue]);

  const loadOptions = (inputValue, callback, name) => {
    setTimeout(() => {
      const filteredOptions = apiData[name].filter((option) =>
        option.toLowerCase().includes(inputValue.toLowerCase())
      );
      callback(
        filteredOptions.map((option) => ({ value: option, label: option }))
      );
    }, 1000);
  };

  const handleCreateOption = (inputValue, name) => {
    const newOption = { value: inputValue, label: inputValue };
    setApiData((prevState) => ({
      ...prevState,
      [name]: [...prevState[name], inputValue],
    }));
    setValue(name, (prevOptions) => [...prevOptions, newOption]);
  };

  return (
    <div className="details-tab-aside h-auto">
      <FieldsetLayout title="Course Price ($)">
        <input type="number" className="form-control my-0" />
      </FieldsetLayout>

      <div className="multi-select-container ">
        {manyValuesSections.map(({ title, name }) => (
          <FieldsetLayout title={title} key={name}>
            <Controller
              name={name}
              control={control}
              render={({ field }) => (
                <AsyncSelect
                  {...field}
                  isMulti
                  cacheOptions
                  defaultOptions
                  loadOptions={(inputValue, callback) =>
                    loadOptions(inputValue, callback, name)
                  }
                  onCreateOption={(inputValue) =>
                    handleCreateOption(inputValue, name)
                  }
                  placeholder={`Select ${name}...`}
                  isClearable
                  isSearchable
                />
              )}
            />
          </FieldsetLayout>
        ))}
      </div>
    </div>
  );
}
