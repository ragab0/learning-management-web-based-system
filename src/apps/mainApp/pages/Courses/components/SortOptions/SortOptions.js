import React from "react";
import "./SortOptions.css";
import Select from "../../../../../../components/SelectForm/SelectForm";
import { getCourses } from "../../../../../../store/slices/coursesSlice";

const options = [
  { name: "title (a-z) ", value: "title" },
  { name: "title (z-a) ", value: "-title" },
  { name: "price (high)", value: "price" },
  { name: "price (low)", value: "-price" },
  { name: "rate (top)", value: "rate" },
  { name: "top enrolled", value: "top" },
  { name: "recently added", value: "recently" },
];

export default function SortOptions() {
  return (
    <div className="sort-options d-flex justify-content-end my-4">
      <Select
        name="sortBy"
        label="sort by"
        options={options}
        thinkAction={getCourses}
      />
    </div>
  );
}
