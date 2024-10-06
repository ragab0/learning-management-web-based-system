import React from "react";
import "./TabProfile.css";
import Img from "../../../../../../assets/svgsComps/image.svg";

export default function TabProfile() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.defaultPrevented);
  };

  return (
    <div className="tab-profile">
      <form onSubmit={handleSubmit}>
        <section>
          <div className="form-group">
            <TextInput label="First Name" placeholder="Label" />
            <TextInput label="Last Name" placeholder="Label" />
          </div>
          <TextInput label="Heading" placeholder="Label" />
          <TextArea label="Description" placeholder="Label" />
          <SelectInput label="Language" options={["English", "Arabic"]} />
        </section>
        <section>
          <ImageUpload />
        </section>
        <section>
          <LinksSection />
        </section>
      </form>
    </div>
  );
}

const TextInput = ({ label, placeholder }) => (
  <label>
    {label}
    <input
      className="form-control py-2"
      type="text"
      placeholder={placeholder}
    />
  </label>
);

const TextArea = ({ label, placeholder }) => (
  <div className="description">
    <label className="w-100">
      {label}
      <input
        className="form-control py-2 pb-5"
        type="text"
        placeholder={placeholder}
      />
    </label>
  </div>
);

const SelectInput = ({ label, options }) => (
  <>
    <label className="d-grid">
      {label}
      <select className="form-select">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  </>
);

const ImageUpload = () => (
  <div className="uploadingImg">
    <label className="d-block mb-4">Image Preview</label>
    <div className="img">
      <img src={Img} alt="Preview" />
    </div>
    <label className="d-block mb-4 mt-5">Add/Change Image</label>
    <div className="selectImage">
      <input className="rounded-2 p-2" type="text" placeholder="Label" />
      <button type="button">Upload Image</button>
      <input className="saveImg" type="submit" value="Save Image" />
    </div>
  </div>
);

const LinksSection = () => {
  const links = [
    "Website",
    "X(Formerly Twitter)",
    "LinkedIn",
    "YouTube",
    "Facebook",
  ];

  return (
    <div className="links">
      <h5>Links</h5>
      {links.map((link, index) => (
        <TextInput key={index} label={link} placeholder="Label" />
      ))}
    </div>
  );
};
