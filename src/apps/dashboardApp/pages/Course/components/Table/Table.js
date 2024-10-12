import React from "react";
import "./Table.css";

export default function Table({ data, columns, onRowClick }) {
  return (
    <div className="tableData py-2 pb-0 mb-0">
      <table className="table table-hover w-100 text-center">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>
                <div className="d-flex justify-content-center align-items-center">
                  <span className="text-dark">{col.header}</span>
                  <span className="sort-icon">
                    <i className="fa-solid fa-sort"></i>
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              onClick={() => onRowClick && onRowClick(row)}
              style={{ cursor: onRowClick ? "pointer" : "default" }}
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex}>{row[col.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
