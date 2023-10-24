/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconLineSetting2 } from "../../icons/IconLineSetting2";
import "./style.css";

export const SidebarFalse = ({
  className,
  icon = <IconLineSetting2 className="icon-line-setting" color="#4658BC" />,
}) => {
  return <div className={`sidebar-false ${className}`}>{icon}</div>;
};
