import React from "react";
import arrowRightImg from "../img/test-arrow-icon.svg";
import plusIcon from "../img/test-icon-plus.svg";
import timesIcon from "../img/test-times-icon.svg";
import RavenButton from "../Reusables/RavenButton";

const Buttons = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "2rem",
          alignItems: "center",
        }}
        className=""
      >
        <RavenButton color={`purple-light`} type="btn-plus" />
        <RavenButton color={`black-light`} type="btn-cancel" />
        <RavenButton
          color={`green-light`}
          type="btn-icon"
          label={`label here`}
          size={"big"}
          textColor={`white-light`}
        />
        <RavenButton
          color={`green-light`}
          type="btn-icon"
          label={`label here`}
          size={"medium"}
          textColor={`white-light`}
        />
        <RavenButton
          color={`blue-dark`}
          label={`label here`}
          size={"medium"}
          loading
        />
        <RavenButton
          color={`deep-green-light`}
          type={`btn-extended`}
          label={`label here`}
          size={"small"}
        />
        <RavenButton
          color={`orange-light`}
          type={`btn-extended`}
          label={`label here`}
          size={"small"}
          onClick={() => {console.log("yes");}}
          disabled
        />
      </div>
    </>
  );
};

export default Buttons;
