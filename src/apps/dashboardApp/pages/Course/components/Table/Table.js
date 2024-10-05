import React from "react";
import "./Table.css";

export default function Table({ data, columns, onRowClick }) {
  return (
    <div className="tableData py-2">
      <table className="table table-hover w-100 text-center">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>
                {col.header}
                <span>
                  <i className="fa-solid fa-sort"></i>
                </span>
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
