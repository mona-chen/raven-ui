import React from "react";

const RadioCheck = () => {
  return (
   <>
    <div style={{display: "flex", gap: "2rem", flexDirection: "row"}}>
      {/* <!-- check start --> */}
      <div className="radio-box-wrap">
        <input
          type="checkbox"
          id="input-radio-one"
          className="input-radio input-radio"
          //   checked={true}
        />
        <label className="label-radio label-radio__green" for="input-radio-one">
          <span className="check"></span>
        </label>
      </div>
      {/* <!-- check end --> */}
      {/* <!-- check start --> */}
      <div className="radio-box-wrap">
        <input
          type="checkbox"
          id="input-radio-two"
          className="input-radio input-radio"
          //   checked={true}
        />
        <label className="label-radio label-radio__black" for="input-radio-two">
          <span className="check"></span>
        </label>
      </div>
      {/* <!-- check end --> */}
      {/* <!-- check start --> */}
      <div className="radio-box-wrap">
        <input
          type="checkbox"
          id="input-radio-three"
          className="input-radio input-radio"
          //   checked={true}
        />
        <label className="label-radio label-radio__purple" for="input-radio-three">
          <span className="check"></span>
        </label>
      </div>
      {/* <!-- check end --> */}
      {/* <!-- check start --> */}
      <div className="radio-box-wrap">
        <input
          type="checkbox"
          id="input-radio-four"
          className="input-radio input-radio"
          //   checked={true}
        />
        <label className="label-radio label-radio__orange" for="input-radio-four">
          <span className="check"></span>
        </label>
      </div>
      {/* <!-- check end --> */}
       {/* <!-- check start --> */}
       <div className="radio-box-wrap">
        <input
          type="checkbox"
          id="input-radio-five"
          className="input-radio input-radio"
        //   checked={true}
        />
        <label className="label-radio label-radio__deep-green" for="input-radio-five">
          <span className="check"></span>
        </label>
      </div>
      {/* <!-- check end --> */}
    </div>
   </>
  );
};

export default RadioCheck;
