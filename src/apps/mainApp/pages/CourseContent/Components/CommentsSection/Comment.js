import ProfileImg from "../../../../../../components/ProfileImg/ProfileImg";
import CommentEditorForm from "./CommentEditor/CommentEditorForm";
import { formatDistanceToNow } from "date-fns";
import { convertFromRaw, Editor, EditorState } from "draft-js";
import { UpArrowEmpty } from "../../../../../../assets/svgsComps/UpArrowEmpty";
import { ReplyIcon } from "../../../../../../assets/svgsComps/ReplyIcon";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  fetchLessonComments,
} from "../../../../../../store/slices/commentsSlice";

export default function Comment({ comment = {} }) {
  const {
    _id,
    content,
    course,
    lesson,
    createdAt,
    replies = [],
    authorDetails: { _id: userId, fname, lname, photo },
  } = comment;

  const dispatch = useDispatch();
  const [viewReply, setViewReply] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const { result = {} } = useSelector((state) => state.auth.login.apiData);
  const { _id: currUserId } = result;
  let editorState;

  try {
    const contentState = convertFromRaw(JSON.parse(content)); // Deserialize JSON
    editorState = EditorState.createWithContent(contentState); // Create EditorState
  } catch (error) {
    console.error("Invalid content format", error);
    editorState = EditorState.createEmpty(); // Fallback to empty editor
  }

  function replyViewHandler() {
    setViewReply(!viewReply);
  }

  function editViewShowHandler() {
    setViewReply(true);
    setIsEditable(true);
  }

  function editViewCloseHandler() {
    setViewReply(false);
    setIsEditable(false);
  }

  function deleteCommentHandler() {
    // to send data with the delete method then we have to use the data field as the body ( the start point );
    dispatch(
      deleteComment({
        anotherDynamicPath: "/" + _id,
      })
    )?.then(function ({ error }) {
      if (!error) {
        dispatch(fetchLessonComments({ anotherDynamicPath: "/" + lesson }));
      }
    });
  }

  const options = [
    { name: "edit", action: editViewShowHandler },
    { name: "delete", action: deleteCommentHandler },
  ];

  return (
    <div className="comment mb-5 ">
      <div className=" d-flex align-items-center gap-2 justify-content-between">
        <div className=" d-flex align-items-center gap-2">
          <ProfileImg photo={photo} fL={fname[0]} lL={lname[0]} />
          <div className=" text-capitalize h6 mb-0 d-flex">
            <h5 className=" text-capitalize h6 mb-0">
              {fname} {lname}
            </h5>
            <i className="opacity-50 ms-2">{formatDistanceToNow(createdAt)}</i>
          </div>
        </div>
        {userId === currUserId && !isEditable && (
          <div className="dropdown">
            <button
              type="button"
              className="btn fa-xs"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
            >
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {options.map(({ name, action }, i) => (
                <li
                  key={i}
                  value={name}
                  style={{ cursor: "pointer" }}
                  className={`dropdown-item text-capitalize`}
                  onClick={action}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div style={{ marginInlineStart: isEditable ? "" : "2.5rem" }}>
        <div>
          {!isEditable && (
            <>
              <Editor
                editorState={editorState}
                readOnly={true}
                wrapperClassName="comment-readonly-editor-wrapper"
              />
              <div className="d-flex gap-3 align-items-center bold mb-3">
                {/* <button className="btn d-flex align-items-center">
                  <UpArrowEmpty width={20} height={20} />
                </button>
                {0}
                <button className="btn d-flex align-items-center">
                  <UpArrowEmpty
                    width={20}
                    height={20}
                    className=" fa-rotate-180"
                  />
                </button> */}
                <button
                  className="btn d-flex align-items-center gap-1 opacity-50"
                  onClick={replyViewHandler}
                >
                  <ReplyIcon width={20} height={20} /> <b>Reply</b>
                </button>
              </div>
            </>
          )}
          <div>
            {viewReply && (
              <div
                className={`${
                  isEditable ? "" : "reply-comment-editor-wrapper"
                } mt-2`}
              >
                <CommentEditorForm
                  lessonId={lesson}
                  courseId={course}
                  parent={_id}
                  isEditable={isEditable}
                  isEditableCloser={editViewCloseHandler}
                  editableCommentId={_id}
                  editableCommentContent={content}
                  editableCommentState={editorState}
                />
              </div>
            )}
            {replies && replies.length > 0 && (
              <div className="reply-comment">
                {replies.map((reply, j) => (
                  <Comment key={j} comment={reply} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
