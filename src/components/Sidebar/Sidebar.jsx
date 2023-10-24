/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconLineDiscount2 } from "../../icons/IconLineDiscount2";
import "./style.css";

export const Sidebar = ({
  state,
  className,
  rectangleClassName,
  rectangleClassNameOverride,
  rectangle = "https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-1.svg",
  img = "https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-25-1.svg",
  frameClassName,
  icon = <IconLineDiscount2 className="icon-line-discount" color="#EA736D" />,
}) => {
  return (
    <div className={`sidebar state-${state} ${className}`}>
      <div className="overlap-group">
        <div className="pattern">
          <div className={`rectangle ${rectangleClassName}`} />
          <img
            className={`img ${rectangleClassNameOverride}`}
            alt="Rectangle"
            src={
              !state
                ? rectangle
                : "https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24.svg"
            }
          />
          <img
            className="rectangle-2"
            alt="Rectangle"
            src={
              !state
                ? img
                : "https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-25.svg"
            }
          />
        </div>
        <div className={`frame ${frameClassName}`}>{icon}</div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  state: PropTypes.bool,
  rectangle: PropTypes.string,
  img: PropTypes.string,
};
