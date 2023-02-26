import React from "react";
import RavenButton from "./RavenButton";
import closeIcon from "../img/close-icon.svg";

const RavenModal = ({
  visble,
  btnColor,
  onBtnClick,
  btnLabel,
  children,
  className,
  onClose,
  loading,
  disabled,
  effect
}) => {
  return (
    <div
      style={{ display: visble ? "unset" : "none" }}
      className={`modal-parent-wrap ${className}`}
    >
      <div className={`content-wrap content-wrap-${effect}`}>
        {/* close icon box start */}
        <div className="close-box">
          <figure onClick={onClose} className="img-box">
            <img src={closeIcon} alt="" className="img" />
          </figure>
        </div>
        {/* close icon box end */}
        <div className="content">{children}</div>
        {/* button wrap start */}
        {btnLabel && (
          <div className="button-wrap">
            <RavenButton
              label={btnLabel}
              loading={loading}
              color={btnColor}
              onClick={onBtnClick}
              size={"medium"}
              disabled={disabled}
            />
          </div>
        )}
        {/* button wrap end */}
      </div>
    </div>
  );
};

export default RavenModal;
