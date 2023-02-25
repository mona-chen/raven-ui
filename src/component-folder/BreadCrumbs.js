import React from "react";
import RavenBreadCrumbs from "../Reusables/RavenBreadCrumbs";

const BreadCrumbs = () => {
  return (
    <>
     <RavenBreadCrumbs
        color={`green-light`}
        list={[
          { label: "test" },
          { label: "testing" },
          { label: "tester", active: true },
          { label: "tested" },
        ]}
      />

      <div className="mb-20"></div>

      <RavenBreadCrumbs
        color={`black-light`}
        list={[
          { label: "test",  },
          { label: "testing" },
          { label: "tester", active: true },
          { label: "tested" ,},
        ]}
        
      />
    </>
  );
};

export default BreadCrumbs;
