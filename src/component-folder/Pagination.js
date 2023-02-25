import React from "react";
import arrowRightImg from "../img/test-arrow-icon.svg";
import RavenPagination from "../Reusables/RavenPagination";

const Pagination = () => {
  return (
    <>
      <RavenPagination
        color="black-light"
        // numSpacing={2}
        currentPage={1}
        totalPage={3}
        blackHover
        // removeNext
        // removePrev
        // removeNum
        nextPage={"next"}
        prevPage={"prev"}
        onNext={(e) => {console.log(e);}}
        onPrev={(e) => {console.log(e);}}
        onNumView={(e) => {console.log(e);}}
      />
    </>
  );
};

export default Pagination;
