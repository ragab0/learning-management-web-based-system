import React from "react";

export default function BtnsAddDelete({ onSave, onDelete, hideDeleteBtn }) {
  return (
    <div className="btn-group" role="group">
      <button
        className="btn btn-primary mb-2 px-5"
        type="button"
        onClick={onSave}
      >
        Save
      </button>
      {!hideDeleteBtn && (
        <button
          className="btn btn-danger mb-2"
          type="button"
          onClick={onDelete}
        >
          Delete
        </button>
      )}
    </div>
  );
}
