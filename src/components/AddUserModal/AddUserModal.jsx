/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Component } from "../Component";
import "./AddUserModal.css";

export const AddUserModal = () => {
  return (
    <div className="add-user-modal">
      <div className="overlap-group">
        <div className="text-wrapper-3">Add new user</div>
      </div>
      <div className="text-wrapper-4">Add</div>
      <div className="frame-3">
        <div className="frame-4">
          <div className="text-wrapper-5">Username</div>
          <img className="img" alt="Divider" />
        </div>
        <div className="frame-5">
          <p className="user-role">
            <span className="span">User</span>
            <span className="text-wrapper-6">&nbsp;</span>
            <span className="span">role</span>
          </p>
          <img className="img" alt="Divider" />
          <img className="mdi-caret-down" alt="Mdi caret down" />
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="frame-6">
          <div className="text-wrapper-7">Email</div>
          <img className="divider-2" alt="Divider" />
        </div>
      </div>
      <div className="div-wrapper">
        <div className="frame-6">
          <div className="text-wrapper-7">Default</div>
          <img className="divider-2" alt="Divider" />
        </div>
      </div>
      <div className="form-elements">
        <div className="text-wrapper-8">Add</div>
      </div>
      <div className="group">
        <Component className="component-instance" frameClassName="design-component-instance-node" />
      </div>
    </div>
  );
};
