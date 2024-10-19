import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const cells = [
  {
    name: "chapter",
  },
  {
    name: "title",
    accessor: "title",
  },
  {
    name: "created at",
    accessor: "createdAt",
  },
];

const tdAnimationStyle = {
  fontWeight: 600,
  backgroundColor: "#BAFFC9",
  borderColor: "#BAFFC9",
};

export default function TableChapters({
  data,
  isNew,
  indexOfFirstChapter,
  totalChapters,
}) {
  const navigate = useNavigate();
  function rowClickHandler(id) {
    navigate(`${id}`);
  }

  return (
    <div className="tableData py-2 pb-0 mb-0">
      <table className="table table-hover w-100">
        <thead>
          <tr>
            {cells.map(({ name }, i) => (
              <th key={i} className=" fw-bold" style={{ cursor: "default" }}>
                <div className=" text-capitalize">
                  <span className="text-dark m-0">{name}</span>
                  <span className="sort-icon disabled">
                    <i className="fa-solid fa-sort"></i>
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) =>
            isNew && indexOfFirstChapter + i + 1 === totalChapters ? (
              <motion.tr
                key={i}
                onClick={() => rowClickHandler(indexOfFirstChapter + i + 1)}
                style={{ cursor: "pointer" }}
                className="col-4 mb-4"
                initial={{ scale: 0.9 }}
                animate={{
                  scale: [0.9, 1.1, 1],
                }}
                transition={{
                  duration: 0.5,
                  scale: {
                    times: [0, 0.5, 1],
                    type: "spring",
                    stiffness: 1000,
                    damping: 20,
                  },
                }}
              >
                <td style={tdAnimationStyle}>{indexOfFirstChapter + i + 1}</td>
                <td style={tdAnimationStyle}>{row["title"]}</td>
                <td style={tdAnimationStyle}>
                  {new Date(row["createdAt"]).toDateString()}{" "}
                  {new Date(row["createdAt"]).toLocaleTimeString()}
                </td>
              </motion.tr>
            ) : (
              <tr
                key={i}
                style={{ cursor: "pointer" }}
                onClick={() => rowClickHandler(indexOfFirstChapter + i + 1)}
              >
                <td>{indexOfFirstChapter + i + 1}</td>
                <td>{row["title"]}</td>
                <td>
                  {new Date(row["createdAt"]).toDateString()}{" "}
                  {new Date(row["createdAt"]).toLocaleTimeString()}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
