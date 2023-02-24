import React from "react";
import mascotImg from "../img/tool-tip-mascot.svg";
import RavenToolTip from "../Reusables/RavenToolTip";

const ToolTips = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          minHeight: "100vh",
          gridTemplateRows: "repeat(10, 1fr",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="tool-tip-grid-wrap"
      >
        <div style={{ position: "relative" }} className="tooltip-hover-wrap ">
          text this top center
          {/* tool tip start */}
          <div className="tool-tip-wrap tool-tip-wrap__black-light tool-tip-wrap_top-center">
            <p className="text">Hi there I Am a Tooltip</p>
          </div>
          {/* tool tip end */}
        </div>
        {/* box end */}
        <div style={{ position: "relative" }} className="tooltip-hover-wrap">
          text this bottom center
          {/* tool tip start */}
          <div className="tool-tip-wrap tool-tip-wrap__black-light tool-tip-wrap_bottom-center">
            <p className="text">Hi there I Am a Tooltip</p>
          </div>
          {/* tool tip end */}
        </div>
        {/* box end */}
        <div style={{ position: "relative" }} className="tooltip-hover-wrap">
          text this top left
          {/* tool tip start */}
          <div className="tool-tip-wrap tool-tip-wrap__black-light tool-tip-wrap_top-left">
            <p className="text">Hi there I Am a Tooltip</p>
          </div>
          {/* tool tip end */}
        </div>
        {/* box end */}
        <div style={{ position: "relative" }} className="tooltip-hover-wrap">
          text this bottom right
          {/* tool tip start */}
          <div className="tool-tip-wrap tool-tip-wrap__orange-light tool-tip-wrap_bottom-right">
            <p className="text">Hi there I Am a Tooltip</p>
          </div>
          {/* tool tip end */}
        </div>
        {/* box end */}
        <div style={{ position: "relative" }} className="tooltip-hover-wrap">
          text this top right
          {/* tool tip start */}
          <div className="tool-tip-wrap tool-tip-wrap__deep-green-light tool-tip-wrap_top-right">
            <p className="text">Hi there I Am a Tooltip</p>
          </div>
          {/* tool tip end */}
        </div>
        {/* box end */}
        <div style={{ position: "relative" }} className="tooltip-hover-wrap">
          text this bottom left
          {/* tool tip start */}
          <div className="tool-tip-wrap tool-tip-wrap__black-light tool-tip-wrap_bottom-left">
            <p className="text">Hi there I Am a Tooltip</p>
          </div>
          {/* tool tip end */}
        </div>
        {/* box end */}
        <div
          // style={{ position: "relative", transform: "translateX(15rem)" }}
          className="tooltip-hover-wrap"
        >
          text this left
          {/* tool tip start */}
          <div className="tool-tip-wrap tool-tip-wrap__green-light tool-tip-wrap_left">
            <p className="text">Hi there I Am a Tooltip</p>
          </div>
          {/* tool tip end */}
        </div>
        {/* box end */}
        <div
          // style={{ position: "relative", transform: "translateX(10rem)" }}
          className="tooltip-hover-wrap"
        >
          text this right
          {/* tool tip start */}
          <div className="tool-tip-wrap tool-tip-wrap__purple-light tool-tip-wrap_right">
            <p className="text">Hi there I Am a Tooltip</p>
          </div>
          {/* tool tip end */}
        </div>
        {/* box end */}
        <div
          // style={{ position: "relative", transform: "translateX(-100%)" }}
          className="tooltip-hover-wrap"
        >
          text this bottom center
          {/* tool tip start */}
          <div className="tool-tip-wrap tool-tip_mascot tool-tip-wrap_big tool-tip-wrap__black-light tool-tip-wrap_bottom-center">
            <figure className="img-box">
              <img src={mascotImg} alt="" className="img" />
            </figure>
            <p className="title">Yeah Cool Right</p>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
              iste beatae. Tempora deserunt fuga distinctio odio excepturi eaque
              vero! Est obcaecati dolore non ad minima, mollitia nulla
            </p>
            <p className="got">Got it!</p>
          </div>
          {/* tool tip end */}
        </div>
        {/* box end */}
        <div
          // style={{
          //   position: "relative",
          //   transform: "translateX(0%) translateY(30rem)",
          // }}
          className="tooltip-hover-wrap"
        >
          text this top center
          {/* tool tip start */}
          <div className="tool-tip-wrap tool-tip-wrap_big tool-tip-wrap__deep-green-light tool-tip-wrap_top-center">
            <p className="title">Yeah Cool Right</p>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
              iste beatae. Tempora deserunt fuga distinctio odio excepturi eaque
              vero! Est obcaecati dolore non ad minima, mollitia nulla
            </p>
            <p className="got">Got it!</p>
          </div>
          {/* tool tip end */}
        </div>
        {/* box end */}
        <div className="tooltip-hover-wrap">
          text this top left
          <RavenToolTip
            position={`top-left`}
            text={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
            iste beatae. Tempora deserunt fuga distinctio odio excepturi eaque
            vero! Est obcaecati dolore non ad minima, mollitia nulla`}
            color={`blue-light`}
            big
            downText={`little`}
            img
            title={`alright`}
            textColor='orange-light'
          />
        </div>
      </div>
    </>
  );
};

export default ToolTips;
