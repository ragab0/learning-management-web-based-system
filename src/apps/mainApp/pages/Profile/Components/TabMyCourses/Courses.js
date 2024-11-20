import React from "react";
import CourseOvervewCard from "../../../../components/CourseOvervewCard/CourseOvervewCard";
import PaginationMain from "../../../../../../components/PaginationMain/PaginationMain";
import NoContent from "../../../../../../components/NoContent/NoContent";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  archiveEnrolledCourse,
  fetchArchivedCourses,
  fetchEnrolledCourses,
  unArchiveEnrolledCourse,
} from "../../../../../../store/slices/studentSlice";

export default function Courses({ isArchived }) {
  const dispatch = useDispatch();
  const {
    apiData: { results = [], totalPages, page: activePage },
    loading,
    isInitialized,
  } = useSelector(
    (state) => state.student[isArchived ? "archivedCourses" : "enrolledCourses"]
  );

  function archiveHandler(id) {
    dispatch(archiveEnrolledCourse({ id })).then(({ error }) => {
      if (!error) {
        dispatch(fetchEnrolledCourses());
      }
    });
  }

  async function unArchiveHandler(id) {
    dispatch(unArchiveEnrolledCourse({ id })).then(({ error }) => {
      if (!error) {
        dispatch(fetchArchivedCourses());
      }
    });
  }

  return (
    <div className="my-courses">
      <div className="row">
        {isInitialized && !results.length ? (
          <NoContent />
        ) : isInitialized && !loading ? (
          results?.map(({ _id: course }, i) => (
            <div className="col-md-6 mb-4" key={i}>
              <CourseOvervewCard course={course} isEnrolled={true}>
                <div className="my-courses-actions">
                  <Link
                    to={"."}
                    className="btn border-0 ps-0"
                    style={{ textDecoration: "underline" }}
                    onClick={() =>
                      isArchived
                        ? unArchiveHandler(course._id)
                        : archiveHandler(course._id)
                    }
                  >
                    {isArchived ? "UnArchive course" : "Archive course"}
                  </Link>
                </div>
              </CourseOvervewCard>
            </div>
          ))
        ) : (
          <Skel />
        )}
        <PaginationMain
          totalPages={totalPages}
          activePage={activePage}
          pageSize={2}
          thunkAction={isArchived ? fetchArchivedCourses : fetchEnrolledCourses}
        />
      </div>
    </div>
  );
}

function Skel() {
  return [...Array(5)].map((course, i) => (
    <div className="col-md-6 mb-4" key={i}>
      <CourseOvervewCard skeleton={true} />
    </div>
  ));
}
