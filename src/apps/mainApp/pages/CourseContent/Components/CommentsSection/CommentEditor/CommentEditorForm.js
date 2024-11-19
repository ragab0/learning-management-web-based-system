import React, { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./CommentEditorForm.css";
import { Editor } from "react-draft-wysiwyg";
import { useForm, Controller } from "react-hook-form";
import { convertToRaw, EditorState } from "draft-js";
import { useDispatch } from "react-redux";
import {
  addComment,
  editComment,
  fetchLessonComments,
} from "../../../../../../../store/slices/commentsSlice";

export default function CommentEditorForm({
  courseId,
  lessonId,
  parent,
  isEditable,
  isEditableCloser,
  editableCommentId,
  editableCommentContent,
  editableCommentState,
}) {
  const dispatch = useDispatch();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { handleSubmit, setValue, control } = useForm({
    mode: "onChange",
  });

  useEffect(
    function () {
      if (isEditable) {
        setEditorState(editableCommentState);
        setValue("editorContent", editableCommentContent);
      }
    },
    [isEditable, editableCommentState, editableCommentContent, setValue]
  );

  // 01 Handle adding a new comment
  function addCommentHandler() {
    const content = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );

    console.log(courseId);

    const newComment = {
      content,
      course: courseId,
      lesson: lessonId,
      parent: parent || null,
      createdAt: Date.now(),
    };
    dispatch(addComment(newComment))?.then(function ({ error }) {
      if (!error) {
        dispatch(fetchLessonComments({ anotherDynamicPath: "/" + lessonId }));
      }
    });
  }

  function cancelHandler() {
    isEditableCloser();
  }

  function editCommentHandler() {
    const content = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );

    dispatch(
      editComment({
        commentId: editableCommentId,
        content,
        updateAt: Date.now(),
      })
    )?.then(function ({ error }) {
      if (!error) {
        dispatch(fetchLessonComments({ anotherDynamicPath: "/" + lessonId }));
      }
    });
  }

  function editorChangeHandler(state) {
    setEditorState(state);
    const content = convertToRaw(state.getCurrentContent());
    setValue("editorContent", content);
  }

  return (
    <form className="comment-editor-form">
      <Controller
        name="editorContent"
        control={control}
        defaultValue=""
        rules={{ required: "Content is required" }}
        render={function ({ field, fieldState }) {
          return (
            <>
              <Editor
                wrapperClassName="comment-editor-wrapper"
                editorClassName="comment-editor"
                editorState={editorState}
                onEditorStateChange={editorChangeHandler}
              />
              {fieldState.error && (
                <p style={{ color: "red" }}>{fieldState.error.message}</p>
              )}
            </>
          );
        }}
      />
      <div className="mt-2 ms-auto" style={{ width: "fit-content" }}>
        {isEditable && (
          <button className="btn px-4" onClick={cancelHandler}>
            Cancel
          </button>
        )}
        <button
          className="btn btn-primary px-4"
          onClick={handleSubmit(
            isEditable ? editCommentHandler : addCommentHandler
          )}
        >
          {isEditable ? "Edit" : "Post"}
        </button>
      </div>
    </form>
  );
}
