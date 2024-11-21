import React from "react";

export default function Reply({ msg = {}, checkDay, currentUserId }) {
  const { sender = "", content, createdAt } = msg;
  const date = new Date(createdAt);
  const result = checkDay(date.toLocaleDateString()); // 00/00/0000

  const now = new Date();
  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);

  const label =
    date.toDateString() === now.toDateString()
      ? "Today"
      : date.toDateString() === yesterday.toDateString()
      ? "Yesterday"
      : undefined;

  return (
    <>
      {result && (
        <div className="date-chip mx-auto rounded-2 my-3">
          {label ||
            new Intl.DateTimeFormat(undefined, {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }).format(new Date(createdAt))}
        </div>
      )}
      <p
        className={`message ${currentUserId !== sender ? "reply-message" : ""}`}
      >
        {content}
        <span className="timestamp">
          {createdAt &&
            new Intl.DateTimeFormat(undefined, {
              hour: "2-digit",
              minute: "2-digit",
            }).format(new Date(createdAt))}
        </span>
      </p>
    </>
  );
}
