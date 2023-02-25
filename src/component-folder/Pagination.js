import React from "react";
import arrowRightImg from "../img/test-arrow-icon.svg";
import RavenPagination from "../Reusables/RavenPagination";

const Pagination = () => {
  return (
    <>
      <RavenPagination
        color="black-light"
        // numSpacing={2}
        currentPage={9}
        totalPage={10}
        blackHover
        // removeNext
        // removePrev
        // onNext={() => {}}
        // onPrev={() => {}}
        // onNumView={() => {}}
      />
    </>
  );
};

export default Pagination;
