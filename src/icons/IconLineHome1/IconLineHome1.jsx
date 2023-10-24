/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconLineHome1 = ({ color = "#3B5162", className }) => {
  return (
    <svg
      className={`icon-line-home-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.73049 2.78829C11.0005 1.77929 12.7805 1.73929 14.0895 2.66829L14.2505 2.78829L20.3395 7.65929C21.0095 8.17829 21.4205 8.94929 21.4905 9.78829L21.5005 9.98929V18.0983C21.5005 20.1883 19.8495 21.8883 17.7805 21.9983H15.7905C14.8395 21.9793 14.0705 21.2393 14.0005 20.3093L13.9905 20.1683V17.3093C13.9905 16.9983 13.7595 16.7393 13.4505 16.6883L13.3605 16.6783H10.6895C10.3705 16.6883 10.1105 16.9183 10.0705 17.2183L10.0605 17.3093V20.1593C10.0605 20.2183 10.0495 20.2883 10.0405 20.3383L10.0305 20.3593L10.0195 20.4283C9.90049 21.2793 9.20049 21.9283 8.33049 21.9893L8.20049 21.9983H6.41049C4.32049 21.9983 2.61049 20.3593 2.50049 18.2983V9.98929C2.50949 9.13829 2.88049 8.34829 3.50049 7.79829L9.73049 2.78829ZM13.3805 3.87829C12.6205 3.26829 11.5405 3.23929 10.7405 3.76829L10.5895 3.87829L4.50949 8.77929C4.16049 9.03829 3.95049 9.42829 3.90049 9.83829L3.88949 9.99829V18.0983C3.88949 19.4283 4.92949 20.5183 6.25049 20.5983H8.20049C8.42049 20.5983 8.61049 20.4493 8.63949 20.2393L8.66049 20.0593L8.67049 20.0083V17.3093C8.67049 16.2393 9.49049 15.3693 10.5405 15.2883H13.3605C14.4295 15.2883 15.2995 16.1093 15.3805 17.1593V20.1683C15.3805 20.3783 15.5305 20.5593 15.7305 20.5983H17.5895C18.9295 20.5983 20.0195 19.5693 20.0995 18.2583L20.1105 18.0983V9.99829C20.0995 9.56929 19.9205 9.16829 19.6105 8.86929L19.4805 8.75829L13.3805 3.87829Z"
        fill={color}
      />
    </svg>
  );
};

IconLineHome1.propTypes = {
  color: PropTypes.string,
};
