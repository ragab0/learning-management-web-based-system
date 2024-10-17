import React from "react";
import "./Table.css";
import { motion } from "framer-motion";

export default function Table({ data, columns, onRowClick, isNew }) {
  return (
    <div className="tableData py-2 pb-0 mb-0">
      <table className="table table-hover w-100">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>
                <div className=" text-capitalize">
                  <span className="text-dark m-0">{col.header}</span>
                  <span className="sort-icon">
                    <i className="fa-solid fa-sort"></i>
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) =>
            isNew && index === data.length - 1 ? (
              <motion.tr
                key={index}
                onClick={() => onRowClick && onRowClick(row)}
                style={{ cursor: onRowClick ? "pointer" : "default" }}
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
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    style={{
                      fontWeight: 600,
                      backgroundColor: "#BAFFC9",
                      borderColor: "#BAFFC9",
                    }}
                  >
                    {row[col.accessor]}
                  </td>
                ))}
              </motion.tr>
            ) : (
              <tr
                key={index}
                onClick={() => onRowClick && onRowClick(row)}
                style={{ cursor: onRowClick ? "pointer" : "default" }}
              >
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>{row[col.accessor]}</td>
                ))}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
