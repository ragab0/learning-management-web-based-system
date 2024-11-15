import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../../../../../../store/slices/studentSlice";
import { messagesData } from "../../../../../../data/messagesData";
import Message from "../../../../../../components/Message/Message";
import PaginationMain from "../../../../../../components/PaginationMain/PaginationMain";
import Skeleton from "react-loading-skeleton";
import MyHeader from "../MyHeader/MyHeader";
import NoContent from "../../../../../../components/NoContent/NoContent";

const sortOptions = [
  { name: "new", value: "date" },
  { name: "old", value: "-date" },
];

export default function TabMyMessages() {
  const dispatch = useDispatch();
  const {
    apiData: { results = [], totalPages, page: activePage },
    isInitialized,
    loading,
  } = useSelector((state) => state.student.messages);

  useEffect(
    function () {
      dispatch(fetchMessages());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="tab-message">
      <MyHeader
        title="messages"
        sortOptions={sortOptions}
        thinkAction={fetchMessages}
      />
      <div className="messages">
        {isInitialized && !results.length ? (
          <NoContent />
        ) : isInitialized && !loading ? (
          messagesData.map((msg, i) => <Message key={i} msg={msg} />)
        ) : (
          <Skel />
        )}
      </div>
      <PaginationMain
        totalPages={totalPages}
        activePage={activePage}
        pageSize={3}
        thunkAction={fetchMessages}
      />
    </div>
  );
}

function Skel() {
  return <Skeleton count={5} height={100} className=" mb-3" />;
}
