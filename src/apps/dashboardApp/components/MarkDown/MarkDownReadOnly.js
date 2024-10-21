import React from "react";
import MDEditor from "@uiw/react-md-editor";
import "./MarkDown.css";
import "@uiw/react-md-editor/markdown-editor.css";

export default function MarkDownReadOnly({ source }) {
  return (
    <div className="my-marker w-100">
      <MDEditor.Markdown
        preview="live"
        source={source}
        className="w-100"
        data-color-mode="light"
        style={{
          backgroundColor: "transparent",
          opacity: 1,
          color: "currentcolor",
        }}
      />
    </div>
  );
}
