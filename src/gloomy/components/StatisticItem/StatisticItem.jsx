import React from "react";
import "./StatisticItem.css";

export const StatisticItem = ({
  number,
  description,
  bgColor,
  numberColor = "#000",
  icon,
  image,
  className = "",
}) => {
  return (
    <div
      className={`statistic-item ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {(icon || image) && (
        <div className="statistic-item-icon">
          {icon ? icon : <img src={image} alt="" />}
        </div>
      )}
      <div className="statistic-item-info">
        <h3 className="statistic-item-number" style={{ color: numberColor }}>
          {number}
        </h3>
        <p className="statistic-item-description">{description}</p>
      </div>
    </div>
  );
};
