import React from "react";
import dropDownImg from "../img/drop-down-img.svg";
import dropDeleteIcon from "../img/drop-down-delete-icon.svg";
import dropDownloadIcon from "../img/drop-down-download-icon.svg";
import dropEditIcon from "../img/drop-down-edit-icon.svg";
import RavenDropDown from "../Reusables/RavenDropDown";

const DropDowns = () => {
  return (
    <div
      className=""
      style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: "3rem" }}
    >
      {/* drop end */}
      <RavenDropDown
        type="edit-delete"
        editText={`lllll`}
        deleteText="kkkk"
        downloadText={`ssssss`}
      />
      <RavenDropDown
        list={[
          { img: dropDownImg, label: "texta" },
          { img: dropDownImg, label: "text 2a" },
          { avatar: "la", label: "text ol" },
          { img: dropDownImg, label: "text ga", labelTwo: "lojwn hahs" },
        ]}
      />
      <RavenDropDown list={["oaoa", "aiaiw", "8whwyw", "aijshs"]} />
    </div>
  );
};

export default DropDowns;
