import React from "react";
import errorIcon from "../img/error-toast-icon.svg";
import successIcon from "../img/toast-success-icon.svg";
import warningIcon from "../img/toast-warning-icon.svg";
import infoIcon from "../img/toast-info-icon.svg";

const Toasts = () => {
  return (
    <>
      {/* <!-- toast start  --> */}
      <div className="toast-wrap toast-wrap__error">
        <figure className="img-box">
          <img src={errorIcon} alt="" className="img" />
        </figure>
        <p className="text">
          Oooopps there’s a mistake Password should have at least 1 capital
          letter
        </p>
        <div className="cancel">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
          </svg>
        </div>
      </div>
      {/* <!-- toast end  --> */}
      <div className="mt-2 mb-2"></div>
      {/* <!-- toast start  --> */}
      <div className="toast-wrap toast-wrap__success">
        <figure className="img-box">
          <img src={successIcon} alt="" className="img" />
        </figure>
        <p className="text">
          Oooopps there’s a mistake Password should have at least 1 capital
          letter
        </p>
        <div className="cancel">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
          </svg>
        </div>
      </div>
      {/* <!-- toast end  --> */}
      <div className="mt-2 mb-2"></div>
      {/* <!-- toast start  --> */}
      <div className="toast-wrap toast-wrap__info">
        <figure className="img-box">
          <img src={infoIcon} alt="" className="img" />
        </figure>
        <p className="text">
          Oooopps there’s a mistake Password should have at least 1 capital
          letter
        </p>
        <div className="cancel">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
          </svg>
        </div>
      </div>
      {/* <!-- toast end  --> */}
      <div className="mt-2 mb-2"></div>
      {/* <!-- toast start  --> */}
      <div className="toast-wrap toast-wrap__warning">
        <figure className="img-box">
          <img src={warningIcon} alt="" className="img" />
        </figure>
        <p className="text">
          Oooopps there’s a mistake Password should have at least 1 capital
          letter
        </p>
        <div className="cancel">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
          </svg>
        </div>
      </div>
      {/* <!-- toast end  --> */}
    </>
  );
};

export default Toasts;
