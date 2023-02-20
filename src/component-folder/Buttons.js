import React from "react";
import arrowRightImg from "../img/test-arrow-icon.svg";
import plusIcon from "../img/test-icon-plus.svg";
import timesIcon from "../img/test-times-icon.svg";

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
        <button className="raven-btn  btn-sm text-white-light btn-green-light">
          Filled SM
        </button>
        <button className="raven-btn btn-md btn-black-light text-white-light">
          Filled MD
        </button>
        <button className="raven-btn btn-lg btn-purple-light text-white-light">
          Filled LG
        </button>
        {/* <!-- -------- --> */}
        <button className="raven-btn btn-icon btn-sm btn-orange-light text-white-light">
          Filled with icon SM
          <figure className="img-box">
            <img src={arrowRightImg} alt="" className="img" />
          </figure>
        </button>
        <button className="raven-btn btn-icon btn-md btn-deep-green-light text-white-light">
          Filled with icon MD
          <figure className="img-box">
            <img src={arrowRightImg} alt="" className="img" />
          </figure>
        </button>
        <button className="raven-btn btn-icon btn-lg btn-green-light text-white-light">
          Filled with icon LG
          <figure className="img-box">
            <img src={arrowRightImg} alt="" className="img" />
          </figure>
        </button>

        {/* <!-- ------ --> */}
        <button className="raven-btn btn-sm btn-outline-grey text-base-bg-black">
          Outline SM
        </button>
        <button className="raven-btn btn_md_ btn-outline-grey text-base-bg-black">
          Outline MD
        </button>
        <button className="raven-btn btn-lg btn-outline-grey text-base-bg-black">
          Outline LG
        </button>

        {/* <!-- ----- --> */}
        <button className="raven-btn btn-sm btn-error-light text-white-light">
          Error SM
        </button>
        <button className="raven-btn btn-md btn-error-light text-white-light">
          Error MD
        </button>
        <button className="raven-btn btn-lg btn-error-light text-white-light">
          Error LG
        </button>

        {/* <!-- --------- --> */}

        <button className="raven-btn btn-sm btn-purple-light text-white-light btn_disabled">
          Disabled SM
        </button>
        <button className="raven-btn btn-md btn-orange-light text-white-light btn_disabled">
          Disabled MD
        </button>
        <button className="raven-btn btn-lg btn-green-light text-white-light btn_disabled">
          Disabled LG
        </button>

        {/* <!-- ----- --> */}
        <button className="raven-btn btn-green-light btn-rounded text-white-light">
          <figure>
            <img src={plusIcon} alt="" />
          </figure>
        </button>
        <button className="raven-btn btn-rounded btn-green-light text-white-light">
          <figure>
            <img src={timesIcon} alt="" />
          </figure>
        </button>
        <button className="raven-btn btn-extended btn-green-light text-white-light">
          <figure>
            <img src={plusIcon} alt="" />
          </figure>
          Extended
        </button>
      </div>
    </>
  );
};

export default Buttons;
