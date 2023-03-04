import React from "react";
import dropDeleteIcon from "../img/drop-down-delete-icon.svg";
import dropDownloadIcon from "../img/drop-down-download-icon.svg";
import dropEditIcon from "../img/drop-down-edit-icon.svg";

const RavenDropDown = ({
  list,
  type,
  editText,
  downloadText,
  deleteText,
  className,
  onEdit,
  onDelete,
  onDownload,
  onAction,
  textColor,
  style,
}) => {
  if (type === "edit-delete") {
    return (
      <div style={style} className={`drop-down-wrap ${className}`}>
        {editText && (
          <div onClick={onEdit} className="text-box">
            <figure className="img-box icon-box">
              <img src={dropEditIcon} alt="" className="img" />
            </figure>
            <p className={`text ${textColor}`}>{editText || "Edit Details"}</p>
          </div>
        )}
        {downloadText && (
          <div onClick={onDownload} className="text-box">
            <figure className="img-box icon-box">
              <img src={dropDownloadIcon} alt="" className="img" />
            </figure>
            <p className={`text ${textColor}`}>{downloadText || "Download Details"}</p>
          </div>
        )}
        {deleteText && (
          <div onClick={onDelete} className="text-box">
            <figure className="img-box icon-box">
              <img src={dropDeleteIcon} alt="" className="img" />
            </figure>
            <p className={`text ${textColor}`}>{deleteText || "Delete Item"}</p>
          </div>
        )}
      </div>
    );
  }
  return (
    <>
      <div style={style} className={`drop-down-wrap ${className}`}>
        {list?.map((chi, idx) => {
          const { label, img, avatar, labelTwo } = chi || "";
          return (
            <div
              onClick={() => onAction(chi)}
              key={idx}
              className={`text-box ${labelTwo && "text-box_two"}`}
            >
              {img && (
                <figure className="img-box">
                  <img src={img} alt="" className="img" />
                </figure>
              )}
              {avatar && !img && (
                <div className="avatar-box">
                  <span className={`${textColor}`}>{avatar}</span>
                </div>
              )}
              <p className={`text ${labelTwo && "text_two"} `}>
                <span className={`${textColor}`}>{label || chi}</span>
                {labelTwo && <span>{labelTwo}</span>}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RavenDropDown;
