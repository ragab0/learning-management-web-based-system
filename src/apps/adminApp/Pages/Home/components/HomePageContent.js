import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../../components/Loader/Loader";
import NoContent from "../../../../../components/NoContent/NoContent";
import "./HomePageContent.css";

export default function HomePageContent() {
  const dispatch = useDispatch();
  const {
    loading,
    error,
    isInitialized,
    apiData: { results = [] },
  } = useSelector((state) => state.admin.currentUsers);

  if (loading) {
    return <Loader color="#fff" />;
  }

  if (isInitialized && error) {
    return <NoContent />;
  }

  return (
    <div className="admin-home-page-content p-3 pe-0">
      {results.map((res, i) => {
        const { fname, lname, photo, email } = res || {};

        return (
          <div key={i} className="admin-card">
            <div className="img-wrapper">
              {photo ? (
                <img src={photo} alt="profile-img" />
              ) : (
                <span>{fname[0] + lname[0]}</span>
              )}
            </div>
            <div className="p-2">
              <div className="card-block">
                <span>name: </span>
                <h4>
                  {fname} {lname}
                </h4>
              </div>
              <div className="card-block">
                <span>email: </span>
                <h4>{email}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
