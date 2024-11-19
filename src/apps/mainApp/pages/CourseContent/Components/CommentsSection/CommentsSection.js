import React, { useEffect } from "react";
import "./CommentsSection.css";
import { fetchLessonComments } from "../../../../../../store/slices/commentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../../../../../components/Loader/Loader";
import Comment from "./Comment";
import CommentEditorForm from "./CommentEditor/CommentEditorForm";

export default function CommentsSection() {
  const dispatch = useDispatch();
  const { courseId } = useParams();

  const {
    apiData: { results = [], count = 0 },
    loading,
    isInitialized,
  } = useSelector((state) => state.comments.lessonComments);
  const {
    currentLesson: { id: lessonId },
  } = useSelector((state) => state.student.currentStudyCourse);

  useEffect(() => {
    if (lessonId) {
      dispatch(fetchLessonComments({ anotherDynamicPath: "/" + lessonId }));
    }
  }, [dispatch, lessonId]);

  if (!isInitialized || loading) {
    return <Loader />;
  }

  const treeComments = results;

  return (
    <section className="section-comment-section">
      <h2 className="mb-3">Write a Comment ({count})</h2>
      <CommentEditorForm courseId={courseId} lessonId={lessonId} />
      <div className="comment-section-body mt-3">
        {treeComments.map((tc, i) => (
          <Comment key={i} comment={tc} />
        ))}
      </div>
    </section>
  );
}
