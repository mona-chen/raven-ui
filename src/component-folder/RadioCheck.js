import React from "react";
import RavenRadioCheck from "../Reusables/RavenRadioCheck";

const RadioCheck = () => {
  return (
   <>
    <div style={{display: "flex", gap: "2rem", flexDirection: "row"}}>
     
      {/* <!-- check end --> */}
      <RavenRadioCheck color={`green-light`} id="241"  />
      <RavenRadioCheck color={`blue-light`} id="291"  />
      <RavenRadioCheck color={`purple-light`} id="221" name={`testing-radio`} />
      <RavenRadioCheck color={`black-light`} id="22" name={`testing-radio`} />
    </div>
   </>
  );
};

export default RadioCheck;
