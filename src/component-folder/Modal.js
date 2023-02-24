import React from "react";
import closeIcon from "../img/close-icon.svg";
import RavenButton from "../Reusables/RavenButton";

const Modal = ({
  children,
  onClose,
  showModal,
  className,
  btnColor,
  btnText,
  onBtnClick,
}) => {
  return (
    <div
      style={{ display: showModal ? "unset" : "none" }}
      className={`modal-parent-wrap ${className}`}
    >
      <div className="content-wrap">
        {/* close icon box start */}
        <div className="close-box">
          <figure onClick={onClose} className="img-box">
            <img src={closeIcon} alt="" className="img" />
          </figure>
        </div>
        {/* close icon box end */}
        <div className="content">{children}</div>
        {/* button wrap start */}
        {/* <div className="button-wrap">
          <RavenButton
            btnText={btnText}
            className={`btn-md btn-black-light text-white-light wp-100 ${btnColor}`}
          />
        </div> */}
        {/* button wrap end */}
      </div>
    </div>
  );
};

export default Modal;
