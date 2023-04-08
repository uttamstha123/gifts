import React from "react";
import DottedBorder from "../dottedBorder/DottedBorder";
import "./cursiveTitle.css";
const CursiveTitle = ({ title, width }) => {
  return (
    <div className="cursiveTitle" style={{ width: `${width}` }}>
      <h1 className="cursiveTitle__heading">{title}</h1>
      <DottedBorder direction="bottom" />
    </div>
  );
};

CursiveTitle.defaultProps = {
  width: "max-content",
};

export default CursiveTitle;
