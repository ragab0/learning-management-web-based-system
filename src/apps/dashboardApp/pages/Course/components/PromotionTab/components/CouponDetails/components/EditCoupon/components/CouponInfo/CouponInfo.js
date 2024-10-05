import React, { useState } from "react";

const selectFields = ["status", "customerGroup", "category", "actions", "type"];

const selectOptions = {
  status: ["Active", "Draft", "Scheduled", "Expired"],
  customerGroup: ["General", "Students", "Premium Members"],
  category: ["Specific Coupon", "General Coupon", "Seasonal Coupon"],
  actions: [
    "Fixed Amount of discount for whole cart",
    "Percentage off per item",
    "Buy One Get One Free",
  ],
  type: ["Amount", "Percentage", "Free Shipping"],
};

export default function CouponInfo() {
  const [formData, setFormData] = useState({
    status: "Active",
    name: "20% Flat off for first 100 Students.",
    description:
      "Buy NCERT Solutions for Class 12 Chemistry and Get 20% off on your course. Only first hundred students can avail this offer. Hurry!",
    customerGroup: "General",
    category: "Specific Coupon",
    code: "NCEFLAT20",
    quantity: 100,
    uses: 1,
    priority: "High",
    actions: "Fixed Amount of discount for whole cart",
    type: "Amount",
    amount: "$10",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "green";
      case "Draft":
        return "black";
      case "Scheduled":
        return "blue";
      case "Expired":
        return "red";
      default:
        return "black";
    }
  };

  return (
    <div className="mt-5">
      <h5 className="text-dark mb-3">Coupon Information</h5>
      {["status", "name", "description", "customerGroup"].map((key) => (
        <div className="mb-4" key={key} style={{ position: "relative" }}>
          <label
            className="form-label select-label"
            htmlFor={key}
            style={{
              position: "absolute",
              top: "-10px",
              left: "10px",
              background: "#fff",
              padding: "0 5px",
              zIndex: "1",
            }}
          >
            {key}
          </label>
          {selectFields.includes(key) ? (
            <select
              id={key}
              className="form-select w-100"
              value={formData[key]}
              onChange={(e) => handleInputChange(key, e.target.value)}
              style={{
                paddingTop: "20px",
                color:
                  key === "status" ? getStatusColor(formData.status) : "black", // Dynamic color for status
              }}
            >
              {selectOptions[key].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={typeof formData[key] === "number" ? "number" : "text"}
              id={key}
              className="form-control w-100"
              value={formData[key]}
              onChange={(e) => handleInputChange(key, e.target.value)}
              style={{ paddingTop: "20px" }}
            />
          )}
        </div>
      ))}

      <h5 className="text-dark mb-3">Coupon Code</h5>
      {[
        "category",
        "code",
        "quantity",
        "uses",
        "priority",
        "actions",
        "type",
        "amount",
      ].map((key) => (
        <div className="mb-4" key={key} style={{ position: "relative" }}>
          <label
            className="form-label select-label"
            htmlFor={key}
            style={{
              position: "absolute",
              top: "-10px",
              left: "10px",
              background: "#fff",
              padding: "0 5px",
              zIndex: "1",
            }}
          >
            {key}
          </label>
          {selectFields.includes(key) ? (
            <select
              id={key}
              className="form-select w-100"
              value={formData[key]}
              onChange={(e) => handleInputChange(key, e.target.value)}
              style={{ paddingTop: "20px" }}
            >
              {selectOptions[key].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : key === "description" ? (
            <textarea
              id={key}
              className="form-control w-100"
              value={formData[key]}
              onChange={(e) => handleInputChange(key, e.target.value)}
              style={{
                paddingTop: "20px",
                height: "200px",
                whiteSpace: "pre-wrap",
                overflowY: "scroll",
              }}
            />
          ) : (
            <input
              type={typeof formData[key] === "number" ? "number" : "text"}
              id={key}
              className="form-control w-100"
              value={formData[key]}
              onChange={(e) => handleInputChange(key, e.target.value)}
              style={{ paddingTop: "20px" }}
            />
          )}
        </div>
      ))}

      <h5 className="text-dark mb-3">Date and Time</h5>
      <div className="mb-4" style={{ position: "relative" }}>
        <label
          className="form-label select-label"
          htmlFor="startDate"
          style={{
            position: "absolute",
            top: "-10px",
            left: "10px",
            background: "#fff",
            padding: "0 5px",
            zIndex: "1",
          }}
        >
          Start Date and Time
        </label>
        <input
          type="datetime-local"
          id="startDate"
          className="form-control w-100"
          value={formData.startDate}
          onChange={(e) => handleInputChange("startDate", e.target.value)}
          style={{ paddingTop: "20px" }}
        />
      </div>

      <div className="mb-4" style={{ position: "relative" }}>
        <label
          className="form-label select-label"
          htmlFor="endDate"
          style={{
            position: "absolute",
            top: "-10px",
            left: "10px",
            background: "#fff",
            padding: "0 5px",
            zIndex: "1",
          }}
        >
          End Date and Time
        </label>
        <input
          type="datetime-local"
          id="endDate"
          className="form-control w-100"
          value={formData.endDate}
          onChange={(e) => handleInputChange("endDate", e.target.value)}
          style={{ paddingTop: "20px" }}
        />
      </div>
    </div>
  );
}
