import React, { useEffect, useState } from "react";
import "./FilterOptions.css";
import LayoutMenuToggler from "../../../../layouts/MenuToggler/MenuToggler";
import LayoutCheckboxesFilter from "../../../../layouts/CheckboxesFilter/CheckboxesFilter";
import StarLight from "../../../../../../assets/svgsComps/StarLight";
import StarDark from "../../../../../../assets/svgsComps/StarDark";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCourses } from "../../../../../../store/slices/coursesSlice";

const staticFieldsNames = ["rate", "chapter", "price", "catg"];

export default function FilterOptions() {
  const [rateState, setRateState] = useState({});
  const [chapterState, setChapterState] = useState({});
  const [priceState, setPriceState] = useState({});
  const [catgState, setCatgState] = useState({});

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  function filterHandler() {
    [rateState, chapterState, priceState, catgState].forEach((cState, i) => {
      searchParams.set(
        staticFieldsNames[i],
        Object.entries(cState)
          .filter(([k, v]) => v)
          .map(([k, v]) => v)
          .join(",")
      );
    });
    dispatch(getCourses());
    setSearchParams(searchParams);
  }

  // fetch state from the url search params && set it as an intialState (to active the current filter COMING - SOON)
  // useEffect(function () {
  //   console.log(
  //     searchParams.forEach(([k, v], i) => {
  //       console.log(k, v);
  //     })
  //   );
  // }, []);

  return (
    <aside className="filter-options-aside">
      <div className="d-flex justify-content-between my-4">
        <button
          className="btn btn-light border-black p-2 ps-4 pe-4"
          onClick={filterHandler}
        >
          <i className="fa-solid fa-filter"></i> Filter
        </button>
      </div>
      <div className="filter-optoins d-flex flex-column flex-wrap">
        <LayoutMenuToggler title="rate">
          <LayoutCheckboxesFilter
            staticName={staticFieldsNames[0]}
            state={rateState}
            setter={setRateState}
            isColReverse={true}
            isValueIndexable={true}
          >
            {rates}
          </LayoutCheckboxesFilter>
        </LayoutMenuToggler>

        <LayoutMenuToggler title="number of chapters">
          <LayoutCheckboxesFilter
            staticName={staticFieldsNames[1]}
            state={chapterState}
            setter={setChapterState}
          >
            {["1-10", "10-15", "15-20", ">20"]}
          </LayoutCheckboxesFilter>
        </LayoutMenuToggler>

        <LayoutMenuToggler title="price">
          <LayoutCheckboxesFilter
            staticName={staticFieldsNames[2]}
            state={priceState}
            setter={setPriceState}
          >
            {["0-150$", "150-200$", "200-250$", ">250-400$", ">400$"]}
          </LayoutCheckboxesFilter>
        </LayoutMenuToggler>

        <LayoutMenuToggler title="category">
          <LayoutCheckboxesFilter
            staticName={staticFieldsNames[3]}
            state={catgState}
            setter={setCatgState}
          >
            {["Front-end", "Back-end", "UI-UX", "Flutter"]}
          </LayoutCheckboxesFilter>
        </LayoutMenuToggler>
      </div>
    </aside>
  );
}

const rates = [...new Array(5)].map((_, i) => (
  <div key={i} className="rate-wrapper d-flex align-items-center gap-2">
    <span className="rate d-flex gap-1 align-items-center">
      {[...new Array(5)].map((_, j) =>
        j <= i ? <StarLight key={j} /> : <StarDark key={j} />
      )}
    </span>
  </div>
));
