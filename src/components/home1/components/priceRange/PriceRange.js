import React, { useState } from "react";
import "./priceRange.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const PriceRange = ({ min, max, step }) => {
  const [range, setRange] = useState({ min: "", max: "" });
  return (
    <div class="priceRange">
      <Slider
        range
        allowCross={false}
        step={1}
        min={min}
        max={max}
        defaultValue={[min, max]}
        onChange={(log) => setRange({ min: log[0], max: log[1] })}
      />
      <label class="form-label">
        Price: ₹{range.min ? range.min : min} - ₹
        {range.max ? range.max : max}
      </label>
    </div>
  );
};
PriceRange.defaultProps = {
  min: 0,
  max: 5,
  step: 0.5,
};
export default PriceRange;
