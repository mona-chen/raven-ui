import React from "react";
import RavenTabLink from "../Reusables/RavenTabLink";

const TabsAndTabLinks = () => {
  return (
    <>
      {/* <!-- tab end  --> */}
      <RavenTabLink
        color={`green-light`}
        list={["test", "tester", "testing", "tested"]}
      />
      <RavenTabLink
        fadedGreen
        color={`green-light`}
        list={["test", "tester", "testing", "tested"]}
      />
      <RavenTabLink
        fadedBlack
        color={`green-light`}
        list={["test", "tester", "testing", "tested"]}
      />
    </>
  );
};

export default TabsAndTabLinks;
