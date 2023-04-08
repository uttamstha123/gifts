import React from "react";
import "./dottedBorder.css";
const DottedBorder = ({ direction, width }) => {
  return (
    <div
      style={{ width: `${width}` }}
      className={`dottedBorder__${direction} dottedBorder`}
    ></div>
  );
};
DottedBorder.defaultProps = {
  width: "100%",
};
export default DottedBorder;
