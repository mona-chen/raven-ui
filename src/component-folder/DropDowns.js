import React from "react";
import dropDownImg from "../img/drop-down-img.svg";
import dropDeleteIcon from "../img/drop-down-delete-icon.svg"
import dropDownloadIcon from "../img/drop-down-download-icon.svg"
import dropEditIcon from "../img/drop-down-edit-icon.svg"

const DropDowns = () => {
  return (
    <div
      className=""
      style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
    >
      {/* drop start */}
      <div className="drop-down-wrap">
        <div className="text-box">
          <p className="text">All Transactions</p>
        </div>
        <div className="text-box">
          <p className="text">Airtime Purchase</p>
        </div>
        <div className="text-box">
          <p className="text">Cable TVs</p>
        </div>
        <div className="text-box">
          <p className="text">Data Purchase</p>
        </div>
        <div className="text-box">
          <p className="text">All Content</p>
        </div>
        <div className="text-box">
          <p className="text">All Content</p>
        </div>
      </div>
      {/* drop end */}

      {/* drop start */}
      <div className="drop-down-wrap">
        <div className="text-box">
          <figure className="img-box">
            <img src={dropDownImg} alt="" className="img" />
          </figure>
          <p className="text">Adeeko Emmanuel</p>
        </div>
        <div className="text-box">
          <figure className="img-box">
            <img src={dropDownImg} alt="" className="img" />
          </figure>
          <p className="text">Olakunle Tayo</p>
        </div>
        <div className="text-box">
          <figure className="img-box">
            <img src={dropDownImg} alt="" className="img" />
          </figure>
          <p className="text">Kehinde Ayeni</p>
        </div>
        <div className="text-box">
          <figure className="img-box">
            <img src={dropDownImg} alt="" className="img" />
          </figure>
          <p className="text">Etim Etim</p>
        </div>
        <div className="text-box">
          <div className="avatar-box">
            <span>DA</span>
          </div>
          <p className="text">Daniel Abayomi</p>
        </div>
        <div className="text-box">
          <div className="avatar-box">
            <span>ED</span>
          </div>
          <p className="text">Edit Details</p>
        </div>
      </div>
      {/* drop end */}

      {/* drop start */}
      <div className="drop-down-wrap">
        <div className="text-box text-box_two">
          <figure className="img-box">
            <img src={dropDownImg} alt="" className="img" />
          </figure>
          <p className="text text_two">
            <span>Header Text</span>
            <span>Some body Text here</span>
          </p>
        </div>
        <div className="text-box text-box_two">
          <figure className="img-box">
            <img src={dropDownImg} alt="" className="img" />
          </figure>
          <p className="text text_two">
            <span>Header Text</span>
            <span>Some body Text here</span>
          </p>
        </div>
        <div className="text-box text-box_two">
          <figure className="img-box">
            <img src={dropDownImg} alt="" className="img" />
          </figure>
          <p className="text text_two">
            <span>Header Text</span>
            <span>Some body Text here</span>
          </p>
        </div>
        <div className="text-box text-box_two">
          <figure className="img-box">
            <img src={dropDownImg} alt="" className="img" />
          </figure>
          <p className="text text_two">
            <span>Header Text</span>
            <span>Some body Text here</span>
          </p>
        </div>
        <div className="text-box text-box_two">
          <figure className="img-box">
            <img src={dropDownImg} alt="" className="img" />
          </figure>
          <p className="text text_two">
            <span>Header Text</span>
            <span>Some body Text here</span>
          </p>
        </div>
      </div>
      {/* drop end */}

      {/* drop start */}
      <div className="drop-down-wrap">
        <div className="text-box">
          <figure className="img-box icon-box">
            <img src={dropEditIcon} alt="" className="img" />
          </figure>
          <p className="text">Edit Details</p>
        </div>
        <div className="text-box">
          <figure className="img-box icon-box">
            <img src={dropDownloadIcon} alt="" className="img" />
          </figure>
          <p className="text">Download Details</p>
        </div>
        <div className="text-box">
          <figure className="img-box icon-box">
            <img src={dropDeleteIcon} alt="" className="img" />
          </figure>
          <p className="text">Delete Item</p>
        </div>
      </div>
      {/* drop end */}
    </div>
  );
};

export default DropDowns;
