import React from "react";
import "./AddInstitution.css";

const AddInstitution = () => {
  return (
    <div className="addinstitution">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Add New Institution</div>
        </div>
        <div className="overlap-group">
          <div className="text-wrapper-2">Add</div>
        </div>
        <div className="text-wrapper-3">Name</div>
        <div className="text-wrapper-4">Company Type</div>
        <div className="text-wrapper-5">Company</div>
        <div className="rectangle-wrapper">
          <div className="rectangle" />
        </div>
        <div className="div-wrapper">
          <div className="rectangle-2" />
        </div>
        <div className="overlap-2">
          <div className="rectangle" />
        </div>
        <div className="text-wrapper-6">Payment Method</div>
        <div className="rectangle-3" />
        <div className="text-wrapper-7">Momo/Bank Account Number</div>
        <div className="rectangle-4" />
        <img
          className="img"
          alt="Rectangle"
          src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6527041ea91dc86d4fd287a7/img/rectangle-110.png"
        />
        <div className="text-wrapper-8">Email</div>
        <div className="rectangle-5" />
      </div>
    </div>
  );
};

export default AddInstitution ;