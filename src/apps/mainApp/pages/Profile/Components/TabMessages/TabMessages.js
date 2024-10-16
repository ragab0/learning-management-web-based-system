import React, { useEffect } from "react";
import "./TabMessages.css";
import FilterOptions from "../FilterOptions/FilterOptions";
import { Link } from "react-router-dom";
import PaginationMain from "../../../../../../components/PaginationMain/PaginationMain";
import NoContent from "../../../../../../components/NoContent/NoContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../../../../../../store/slices/studentSlice";
import { messagesData } from "../../../../../../data/messagesData";
import Loader from "../../../../../../components/Loader/Loader";

export default function TabMessages() {
  const dispatch = useDispatch();
  const {
    apiData: { results, totalPages, page: activePage },
    loading,
    isInitialized,
  } = useSelector((state) => state.student.messages);

  useEffect(
    function () {
      dispatch(fetchMessages());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  if (loading) return <Loader />;

  if (isInitialized && !(results?.length > 0)) {
    return <NoContent />;
  }

  return (
    <div className="tab-message">
      <header className="header col-12">
        <h2>my messages</h2>
        <FilterOptions />
      </header>
      <div className="messages">
        {messagesData.map(({ avatarSrc, userName, date, content }, i) => (
          <Link
            to={`../teachers/chat/${i}`}
            key={i}
            className="message-wrappepr"
          >
            <article className={"messageContainer"}>
              <header className={"messageHeader"}>
                <div className={"userInfo"}>
                  <img
                    loading="lazy"
                    src={avatarSrc}
                    className={"userAvatar"}
                    alt={`${userName}'s avatar`}
                  />
                  <span>{userName}</span>
                </div>
                <time className={"messageDate"} dateTime={date}>
                  {date}
                </time>
              </header>
              <p className={"messageContent"}>{content}</p>
            </article>
          </Link>
        ))}
        {/* <PaginationMain /> */}
      </div>
    </div>
  );
}
