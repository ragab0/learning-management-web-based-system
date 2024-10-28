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
        return "text-success";
      case "Draft":
        return "text-dark";
      case "Scheduled":
        return "text-primary";
      case "Expired":
        return "text-danger";
      default:
        return "text-dark";
    }
  };

  return (
    <div className="mt-5">
      <h5 className="text-dark mb-3">Coupon Information</h5>
      {selectFields.map((key, i) => (
        <div className="mb-4" key={i}>
          <label className="form-label" htmlFor={key}>
            {key}
          </label>
          {selectFields.includes(key) ? (
            <select
              id={key}
              className="form-select"
              value={formData[key]}
              onChange={(e) => handleInputChange(key, e.target.value)}
              style={{
                color: key === "status" ? getStatusColor(formData.status) : "",
              }}
            >
              {selectOptions[key].map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : key === "description" ? (
            <textarea
              id={key}
              className="form-control"
              value={formData[key]}
              onChange={(e) => handleInputChange(key, e.target.value)}
              style={{
                height: "200px",
                whiteSpace: "pre-wrap",
                overflowY: "scroll",
              }}
            />
          ) : (
            <input
              type={typeof formData[key] === "number" ? "number" : "text"}
              id={key}
              className="form-control"
              value={formData[key]}
              onChange={(e) => handleInputChange(key, e.target.value)}
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
      ].map((key, i) => (
        <div className="mb-4" key={i}>
          <label className="form-label" htmlFor={key}>
            {key}
          </label>
          {selectFields.includes(key) ? (
            <select
              id={key}
              className="form-select"
              value={formData[key]}
              onChange={(e) => handleInputChange(key, e.target.value)}
            >
              {selectOptions[key].map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : key === "description" ? (
            <textarea
              id={key}
              className="form-control"
              value={formData[key]}
              onChange={(e) => handleInputChange(key, e.target.value)}
              style={{
                height: "200px",
                whiteSpace: "pre-wrap",
                overflowY: "scroll",
              }}
            />
          ) : (
            <input
              type={typeof formData[key] === "number" ? "number" : "text"}
              id={key}
              className="form-control"
              value={formData[key]}
              onChange={(e) => handleInputChange(key, e.target.value)}
            />
          )}
        </div>
      ))}

      <h5 className="text-dark mb-3">Date and Time</h5>
      <div className="mb-4">
        <label className="form-label" htmlFor="startDate">
          Start Date and Time
        </label>
        <input
          type="datetime-local"
          id="startDate"
          className="form-control"
          value={formData.startDate}
          onChange={(e) => handleInputChange("startDate", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="form-label" htmlFor="endDate">
          End Date and Time
        </label>
        <input
          type="datetime-local"
          id="endDate"
          className="form-control"
          value={formData.endDate}
          onChange={(e) => handleInputChange("endDate", e.target.value)}
        />
      </div>
    </div>
  );
}
