import React from 'react'
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
          <button className="btn btn_sm__green text-white">Filled SM</button>
          <button className="btn btn_md__green text-white">Filled MD</button>
          <button className="btn btn_lg__green text-white">Filled LG</button>
          {/* <!-- -------- --> */}
          <button className="btn btn-icon_sm__green text-white">
            Filled with icon SM
            <figure className="img-box">
              <img src={arrowRightImg} alt="" className="img" />
            </figure>
          </button>
          <button className="btn btn-icon_md__green text-white">
            Filled with icon MD
            <figure className="img-box">
              <img src={arrowRightImg} alt="" className="img" />
            </figure>
          </button>
          <button className="btn btn-icon_lg__green text-white">
            Filled with icon LG
            <figure className="img-box">
              <img src={arrowRightImg} alt="" className="img" />
            </figure>
          </button>

          {/* <!-- ------ --> */}
          <button className="btn btn_sm_outline__grey text-base-bg-black">
            Outline SM
          </button>
          <button className="btn btn_md_outline__grey text-base-bg-black">
            Outline MD
          </button>
          <button className="btn btn_lg_outline__grey text-base-bg-black">
            Outline LG
          </button>

          {/* <!-- ----- --> */}
          <button className="btn btn_sm__error text-white">Error SM</button>
          <button className="btn btn_md__error text-white">Error MD</button>
          <button className="btn btn_lg__error text-white">Error LG</button>

          {/* <!-- --------- --> */}

          <button className="btn btn_sm__purple text-white btn_disabled">
            Disabled SM
          </button>
          <button className="btn btn_md__orange text-white btn_disabled">
            Disabled MD
          </button>
          <button className="btn btn_lg__green text-white btn_disabled">
            Disabled LG
          </button>

          {/* <!-- ----- --> */}
          <button className="btn btn_rounded__green text-white">
            <figure>
              <img src={plusIcon} alt="" />
            </figure>
          </button>
          <button className="btn btn_rounded__green text-white">
            <figure>
              <img src={timesIcon} alt="" />
            </figure>
          </button>
          <button className="btn btn_extended__green text-white">
            <figure>
              <img src={plusIcon} alt="" />
            </figure>
            Extended
          </button>
        </div>
   </>
  )
}

export default Buttons