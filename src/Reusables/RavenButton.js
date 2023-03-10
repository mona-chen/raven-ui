import React from "react";
import arrowRightImg from "../img/test-arrow-icon.svg";
import plusIcon from "../img/test-icon-plus.svg";
import timesIcon from "../img/test-times-icon.svg";

const RavenButton = ({
  className,
  label,
  onClick,
  style,
  type,
  color,
  size,
  textColor,
  disabled,
}) => {
  if (type === "btn-extended") {
    return (
      <button
        style={style}
        onClick={() => {
          onClick && onClick();
        }}
        className={`raven-btn btn-extended btn-${color || "green-light"}   ${
          size === "small" ? "btn-sm" : size === "big" ? "btn-lg" : "btn-md"
        } text-${textColor || "white-light"} ${className} ${
          disabled && "btn_disabled"
        }`}
      >
        <figure className="img-box-two">
          <img src={plusIcon} alt="" className="img" />
        </figure>
        {label}
      </button>
    );
  }
  if (type === "btn-plus") {
    return (
      <button
        style={style}
        onClick={() => {
          onClick && onClick();
        }}
        className={`raven-btn btn-${color || "green-light"} btn-rounded text-${
          textColor || "white-light"
        } ${className} ${disabled && "btn_disabled"}`}
      >
        <figure className="img-box-two">
          <img src={plusIcon} alt="" className="img" />
        </figure>
      </button>
    );
  }
  if (type === "btn-cancel") {
    return (
      <button
        style={style}
        onClick={() => {
          onClick && onClick();
        }}
        className={`raven-btn btn-${color || "green-light"} btn-rounded text-${
          textColor || "white-light"
        } ${className} ${disabled && "btn_disabled"}`}
      >
        <figure className="img-box-two img-cancel">
          <img src={timesIcon} alt="" className="img" />
        </figure>
      </button>
    );
  }

  if (type === "btn-icon") {
    return (
      <button
        style={style}
        onClick={() => {
          onClick && onClick();
        }}
        className={`raven-btn btn-icon  ${
          size === "small" ? "btn-sm" : size === "big" ? "btn-lg" : "btn-md"
        } btn-${color || "green-light"} text-${
          textColor || "white-light"
        } ${className} ${disabled && "btn_disabled"} `}
      >
        {label}
        <figure className="img-box">
          <img src={arrowRightImg} alt="" className="img" />
        </figure>
      </button>
    );
  }
  return (
    <button
      style={style}
      onClick={() => {
        onClick && onClick();
      }}
      className={`raven-btn   ${
        size === "small" ? "btn-sm" : size === "big" ? "btn-lg" : "btn-md"
      } btn-${color || "green-light"} text-${
        textColor || "white-light"
      } ${className} ${disabled && "btn_disabled"}`}
    >
      {label}
    </button>
  );
};

export default RavenButton;
