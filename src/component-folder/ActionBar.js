import React, { useState } from "react";
import errorIcon from "../img/error-toast-icon.svg";
// import successIcon from "../img/toast-success-icon.svg";
import warningIcon from "../img/toast-warning-icon.svg";
import infoIcon from "../img/toast-info-icon.svg";
import RavenActionBar from "../Reusables/RavenActionBar";

const ActionBar = () => {
  const [show, setShow] = useState(true);
  const [showTwo, setShowTwo] = useState(true);
  const [showThree, setShowThree] = useState(true);
  return (
    <>
      <RavenActionBar
        msg={`Oooopps there’s a mistake Password should have at least 1 capital
            letter`}
        actionText="lorem seven"
        visible={show}
        onCancel={() => setShow(false)}
      />
      <RavenActionBar
        msg={`Oooopps there’s a mistake Password should have at least 1 capital
            letter`}
        actionText="lorem seven"
        visible={showTwo}
        type="error"
        onCancel={() => setShowTwo(false)}
      />
      <RavenActionBar
        msg={`Oooopps there’s a mistake Password should have at least 1 capital
            letter`}
        actionText="lorem seven"
        visible={showThree}
        type="warning"
        onCancel={() => setShowThree(false)}
      />
    </>
  );
};

export default ActionBar;
