import React from "react";
import "./DeleteUserModal.css";

export const DeleteUserModal = () => {
  return (
    <div className="deleteUserModal">
      <div className="div">
        <div className="overlap-group">
          <div className="add-new-user">Delete user</div>
        </div>
        <div className="text-wrapper">Add</div>
        <p className="p">Are you sure you want to delete this user?</p>
        <div className="frame">
          <div className="form-elements">
            <img
              className="img"
              alt="Mdi check"
              src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525e8e0196b2bd8eaf4b385/img/mdi-check.svg"
            />
            <div className="dine-in">Save Settings</div>
          </div>
          <div className="form-elements-2">
            <img
              className="img"
              alt="Akar icons cross"
              src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525e8e0196b2bd8eaf4b385/img/akar-icons-cross.svg"
            />
            <div className="text-wrapper-2">Cancel</div>
          </div>
        </div>
      </div>
    </div>
  );
};
