/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Component = ({ className, frameClassName }) => {
  return (
    <div className={`component ${className}`}>
      <div className={`frame ${frameClassName}`}>
        <div className="div">
          <div className="text-wrapper">First name</div>
          <img
            className="divider"
            alt="Divider"
            src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525e8e0196b2bd8eaf4b385/img/divider.svg"
          />
        </div>
        <div className="frame-2">
          <div className="text-wrapper-2">Last name</div>
          <img
            className="divider"
            alt="Divider"
            src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525e8e0196b2bd8eaf4b385/img/divider.svg"
          />
        </div>
      </div>
    </div>
  );
};
