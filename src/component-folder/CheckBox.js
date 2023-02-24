import React from "react";
import RavenCheckBox from "../Reusables/RavenCheckBox";

const CheckBox = () => {
  return (
    <>
      <div style={{ display: "flex", gap: "2rem" }} className="">
        {/* <!-- check end --> */}
        <RavenCheckBox color={`purple-light`} id="1" />
        <RavenCheckBox color={`black-light`} id="2" />
        <RavenCheckBox color={`green-light`} id="3" />
      </div>
    </>
  );
};

export default CheckBox;
