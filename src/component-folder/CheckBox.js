import React from "react";
import RavenCheckBox from "../Reusables/RavenCheckBox";

const CheckBox = () => {
  return (
    <>
      <div style={{ display: "flex", gap: "2rem" }} className="">
        {/* <!-- check start --> */}
        <div className="check-box-wrap">
          <input
            type="checkbox"
            id="input-check-one"
            className="input-check input-check"
          />
          <label
            className="label-check label-check__green-dark"
            for="input-check-one"
          >
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </label>
        </div>
        {/* <!-- check end --> */}
        {/* <!-- check start --> */}
        <div className="check-box-wrap">
          <input
            type="checkbox"
            id="input-check-two"
            className="input-check input-check"
          />
          <label
            className="label-check label-check__black-light"
            for="input-check-two"
          >
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </label>
        </div>
        {/* <!-- check end --> */}
        {/* <!-- check start --> */}
        <div className="check-box-wrap">
          <input
            type="checkbox"
            id="input-check-three"
            className="input-check input-check"
          />
          <label
            className="label-check label-check__orange-light"
            for="input-check-three"
          >
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </label>
        </div>
        {/* <!-- check end --> */}
        {/* <!-- check start --> */}
        <div className="check-box-wrap">
          <input
            type="checkbox"
            id="input-check-four"
            className="input-check input-check"
          />
          <label
            className="label-check label-check__purple-light"
            for="input-check-four"
          >
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </label>
        </div>
        {/* <!-- check end --> */}
        {/* <!-- check start --> */}
        <div className="check-box-wrap">
          <input
            type="checkbox"
            id="input-check-five"
            className="input-check input-check"
          />
          <label
            className="label-check label-check__blue-light"
            for="input-check-five"
          >
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </label>
        </div>
        {/* <!-- check end --> */}
        {/* <!-- check start --> */}
        <div className="check-box-wrap">
          <input
            type="checkbox"
            id="input-check-six"
            className="input-check input-check"
          />
          <label
            className="label-check label-check__deep-green-light"
            for="input-check-six"
          >
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </label>
        </div>
        {/* <!-- check end --> */}
        <RavenCheckBox color={`purple-light`} id="1" />
        <RavenCheckBox color={`black-light`} id="2" />
        <RavenCheckBox color={`green-light`} id="3" />
      </div>
    </>
  );
};

export default CheckBox;
