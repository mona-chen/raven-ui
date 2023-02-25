import React from "react";
import arrowRightImg from "../img/test-arrow-icon.svg";
import RavenPagination from "../Reusables/RavenPagination";

const Pagination = () => {
  return (
    <>
      <RavenPagination
        color="black-light"
        // numSpacing={1}
        currentPage={3}
        totalPage={10}
        blackHover
        // removeNext
        // removePrev
        // removeNum
        // onNext={() => {}}
        // onPrev={() => {}}
        // onNumView={() => {}}
      />
    </>
  );
};

export default Pagination;
