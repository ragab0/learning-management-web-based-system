import React from "react";
import MDEditor from "@uiw/react-md-editor";
import "./MarkDown.css";
import "@uiw/react-md-editor/markdown-editor.css";

export default function MarkDown({ setter, name, value }) {
  return (
    <div className="my-marker w-100">
      <MDEditor
        preview="live"
        onChange={(v) => setter(name, v)}
        value={value}
        className="w-100"
        data-color-mode="light"
        height={300}
      />
    </div>
  );
}
