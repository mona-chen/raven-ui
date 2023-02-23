"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _errorToastIcon = _interopRequireDefault(require("../img/error-toast-icon.svg"));
var _toastWarningIcon = _interopRequireDefault(require("../img/toast-warning-icon.svg"));
var _toastInfoIcon = _interopRequireDefault(require("../img/toast-info-icon.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import successIcon from "../img/toast-success-icon.svg";

var ActionBar = function ActionBar(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "action_bar action_bar__info"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _toastInfoIcon.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Oooopps there\u2019s a mistake Password should have at least 1 capital letter"), /*#__PURE__*/_react.default.createElement("div", {
    className: "action-box"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Lorem, ipsum."), /*#__PURE__*/_react.default.createElement("div", {
    className: "arrow-icon"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "cancel"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-20 mb-20"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "action_bar action_bar__error"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _errorToastIcon.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Oooopps there\u2019s a mistake Password should have at least 1 capital letter"), /*#__PURE__*/_react.default.createElement("div", {
    className: "action-box"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Lorem, ipsum."), /*#__PURE__*/_react.default.createElement("div", {
    className: "arrow-icon"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "cancel"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-20 mb-20"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "action_bar action_bar__warning"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _toastWarningIcon.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Oooopps there\u2019s a mistake Password should have at least 1 capital letter"), /*#__PURE__*/_react.default.createElement("div", {
    className: "action-box"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Lorem, ipsum."), /*#__PURE__*/_react.default.createElement("div", {
    className: "arrow-icon"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "cancel"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
  })))));
};
var _default = ActionBar;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var BreadCrumbs = function BreadCrumbs() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "bread-crumb-parent"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "crumb-step"
  }, "Parent"), /*#__PURE__*/_react.default.createElement("svg", {
    className: "crumb-arrow__green-light",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "crumb-step"
  }, "stepOne"), /*#__PURE__*/_react.default.createElement("svg", {
    className: "crumb-arrow__green-light",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "crumb-step crumb-step-active__green-light"
  }, "stepTwo")), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-20 mb-20"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "bread-crumb-parent"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "crumb-step"
  }, "Parent"), /*#__PURE__*/_react.default.createElement("svg", {
    className: "crumb-arrow__green-light",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "crumb-step"
  }, "stepOne"), /*#__PURE__*/_react.default.createElement("svg", {
    className: "crumb-arrow__green-light",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "crumb-step"
  }, "stepTwo"), /*#__PURE__*/_react.default.createElement("svg", {
    className: "crumb-arrow__green-light",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "crumb-step"
  }, "stepThree"), /*#__PURE__*/_react.default.createElement("svg", {
    className: "crumb-arrow__green-light",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "crumb-step crumb-step-active__green-light"
  }, "stepFour")));
};
var _default = BreadCrumbs;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _testArrowIcon = _interopRequireDefault(require("../img/test-arrow-icon.svg"));
var _testIconPlus = _interopRequireDefault(require("../img/test-icon-plus.svg"));
var _testTimesIcon = _interopRequireDefault(require("../img/test-times-icon.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Buttons = function Buttons() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridGap: "2rem",
      alignItems: "center"
    },
    className: ""
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "raven-btn  btn-sm text-white-light btn-green-light"
  }, "Filled SM"), /*#__PURE__*/_react.default.createElement("button", {
    className: "raven-btn btn-md btn-black-light text-white-light"
  }, "Filled MD"), /*#__PURE__*/_react.default.createElement("button", {
    className: "raven-btn btn-lg btn-purple-light text-white-light"
  }, "Filled LG"), /*#__PURE__*/_react.default.createElement("button", {
    className: "raven-btn btn-icon btn-sm btn-orange-light text-white-light"
  }, "Filled with icon SM", /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _testArrowIcon.default,
    alt: "",
    className: "img"
  }))), /*#__PURE__*/_react.default.createElement("button", {
    className: "raven-btn btn-icon btn-md btn-deep-green-light text-white-light"
  }, "Filled with icon MD", /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _testArrowIcon.default,
    alt: "",
    className: "img"
  }))), /*#__PURE__*/_react.default.createElement("button", {
    className: "raven-btn btn-icon btn-lg btn-green-light text-white-light"
  }, "Filled with icon LG", /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _testArrowIcon.default,
    alt: "",
    className: "img"
  }))), /*#__PURE__*/_react.default.createElement("button", {
    className: "raven-btn btn-sm btn-outline-grey text-base-bg-black"
  }, "Outline SM"), /*#__PURE__*/_react.default.createElement("button", {
    className: "raven-btn btn_md_ btn-outline-grey text-base-bg-black"
  }, "Outline MD"), /*#__PURE__*/_react.default.createElement("button", {
    className: "raven-btn btn-lg btn-outline-grey text-base-bg-black"
  }, "Outline LG"), /*#__PURE__*/_react.default.createElement("button", {
    className: "raven-btn btn-sm btn-error-light text-white-light"
  }, "Error SM"), /*#__PURE__*/_react.default.createElement("button", {
    className: "raven-btn btn-md btn-error-light text-white-light"
  }, "Error MD"), /*#__PURE__*/_react.default.createElement("button", {
    className: "raven-btn btn-lg btn-error-light text-white-light"
  }, "Error LG"), /*#__PURE__*/_react.default.createElement("button", {
    className: "raven-btn btn-sm btn-purple-light text-white-light btn_disabled"
  }, "Disabled SM"), /*#__PURE__*/_react.default.createElement("button", {
    className: "raven-btn btn-md btn-orange-light text-white-light btn_disabled"
  }, "Disabled MD"), /*#__PURE__*/_react.default.createElement("button", {
    className: "raven-btn btn-lg btn-green-light text-white-light btn_disabled"
  }, "Disabled LG"), /*#__PURE__*/_react.default.createElement("button", {
    className: "raven-btn btn-green-light btn-rounded text-white-light"
  }, /*#__PURE__*/_react.default.createElement("figure", null, /*#__PURE__*/_react.default.createElement("img", {
    src: _testIconPlus.default,
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement("button", {
    className: "raven-btn btn-rounded btn-green-light text-white-light"
  }, /*#__PURE__*/_react.default.createElement("figure", null, /*#__PURE__*/_react.default.createElement("img", {
    src: _testTimesIcon.default,
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement("button", {
    className: "raven-btn btn-extended btn-green-light text-white-light"
  }, /*#__PURE__*/_react.default.createElement("figure", null, /*#__PURE__*/_react.default.createElement("img", {
    src: _testIconPlus.default,
    alt: ""
  })), "Extended")));
};
var _default = Buttons;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CheckBox = function CheckBox() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      gap: "2rem"
    },
    className: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "check-box-wrap"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: "input-check-one",
    className: "input-check input-check"
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "label-check label-check__green-dark",
    for: "input-check-one"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "check-box-wrap"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: "input-check-two",
    className: "input-check input-check"
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "label-check label-check__black-light",
    for: "input-check-two"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "check-box-wrap"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: "input-check-three",
    className: "input-check input-check"
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "label-check label-check__orange-light",
    for: "input-check-three"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "check-box-wrap"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: "input-check-four",
    className: "input-check input-check"
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "label-check label-check__purple-light",
    for: "input-check-four"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "check-box-wrap"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: "input-check-five",
    className: "input-check input-check"
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "label-check label-check__blue-light",
    for: "input-check-five"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "check-box-wrap"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: "input-check-six",
    className: "input-check input-check"
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "label-check label-check__deep-green-light",
    for: "input-check-six"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
  }))))));
};
var _default = CheckBox;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _dropDownImg = _interopRequireDefault(require("../img/drop-down-img.svg"));
var _dropDownDeleteIcon = _interopRequireDefault(require("../img/drop-down-delete-icon.svg"));
var _dropDownDownloadIcon = _interopRequireDefault(require("../img/drop-down-download-icon.svg"));
var _dropDownEditIcon = _interopRequireDefault(require("../img/drop-down-edit-icon.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var DropDowns = function DropDowns() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "drop-down-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "All Transactions")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Airtime Purchase")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Cable TVs")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Data Purchase")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "All Content")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "All Content"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "drop-down-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _dropDownImg.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Adeeko Emmanuel")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _dropDownImg.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Olakunle Tayo")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _dropDownImg.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Kehinde Ayeni")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _dropDownImg.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Etim Etim")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "avatar-box"
  }, /*#__PURE__*/_react.default.createElement("span", null, "DA")), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Daniel Abayomi")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "avatar-box"
  }, /*#__PURE__*/_react.default.createElement("span", null, "ED")), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Edit Details"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "drop-down-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box text-box_two"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _dropDownImg.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "text text_two"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Header Text"), /*#__PURE__*/_react.default.createElement("span", null, "Some body Text here"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box text-box_two"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _dropDownImg.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "text text_two"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Header Text"), /*#__PURE__*/_react.default.createElement("span", null, "Some body Text here"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box text-box_two"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _dropDownImg.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "text text_two"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Header Text"), /*#__PURE__*/_react.default.createElement("span", null, "Some body Text here"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box text-box_two"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _dropDownImg.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "text text_two"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Header Text"), /*#__PURE__*/_react.default.createElement("span", null, "Some body Text here"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box text-box_two"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _dropDownImg.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "text text_two"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Header Text"), /*#__PURE__*/_react.default.createElement("span", null, "Some body Text here")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "drop-down-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box icon-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _dropDownEditIcon.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Edit Details")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box icon-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _dropDownDownloadIcon.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Download Details")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-box"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box icon-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _dropDownDeleteIcon.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Delete Item"))));
};
var _default = DropDowns;
exports.default = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactSelect = _interopRequireDefault(require("react-select"));
var _reactFlatpickr = _interopRequireDefault(require("react-flatpickr"));
var _moment = _interopRequireDefault(require("moment"));
var _calendarcalendarIcon = _interopRequireDefault(require("../img/calendarcalendar-icon.svg"));
var _search = _interopRequireDefault(require("../img/search.svg"));
var _NGflagSelect = _interopRequireDefault(require("../img/NGflag-select.svg"));
var _reactPhoneInput = _interopRequireDefault(require("react-phone-input-2"));
require("react-phone-input-2/lib/style.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var InputFields = function InputFields() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPasword = _useState2[0],
    setShowPassword = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    selectVal = _useState4[0],
    setSelectVal = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    toDate = _useState6[0],
    settoDate = _useState6[1];
  var reactSelectStyleTable = {
    control: function control(base, state) {
      return _objectSpread(_objectSpread({}, base), {}, {
        border: state.isFocused ? "0.1rem solid #6F6F6F" : "0.1rem solid #6F6F6F",
        // backgroundColor: state.isSelected ? "#6F6F6F" : "white",
        boxShadow: state.isFocused ? "0.1rem solid #6F6F6F" : 0,
        "&:hover": {
          // border: state.isFocused ? 0 : 0
        }
      });
    },
    option: function option(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        backgroundColor: state.isSelected ? "#0b8376" : "white"
      });
    }
  };
  var selectOption = [{
    label: "Option one",
    value: "1"
  }, {
    label: "Option two",
    value: "2"
  }, {
    label: "Option three",
    value: "3"
  }];
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: "2rem",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group form-group__green-light"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "",
    className: "form-label"
  }, "Header text *", " "), /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    placeholder: "Placeholder Here",
    className: "form-input"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "error-text"
  }, "There is an error with the values you provided")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group form-group__green-light"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "",
    className: "form-label"
  }, "Number"), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    placeholder: "Placeholder Here",
    className: "form-input"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "error-text"
  }, "There is an error with the values you provided")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group form-group__green-light form-group_password"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "",
    className: "form-label"
  }, "Password"), /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group input-group__green-light"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: showPasword ? "text" : "password",
    placeholder: "Placeholder Here",
    className: "form-input"
  }), /*#__PURE__*/_react.default.createElement("p", {
    onClick: function onClick() {
      return setShowPassword(!showPasword);
    },
    className: "show-hide"
  }, showPasword ? "Hide" : "Show"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group form-group__green-light"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "",
    className: "form-label"
  }, "Select"), /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
    styles: reactSelectStyleTable,
    noOptionsMessage: "No Available Option",
    options: selectOption,
    value: selectVal,
    onChange: function onChange(e) {
      return setSelectVal(e);
    },
    className: "react-select-class ".concat(selectVal && "react-select-class-selected")
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group form-group__green-light "
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "",
    className: "form-label"
  }, "Date"), /*#__PURE__*/_react.default.createElement("div", {
    className: "wrap "
  }, /*#__PURE__*/_react.default.createElement(_reactFlatpickr.default, {
    id: "calendar-input",
    value: toDate,
    onChange: function onChange(date) {
      settoDate((0, _moment.default)(date[0]).format("YYYY-MM-DD"));
    },
    name: "to",
    className: "form-input input-calender",
    autoComplete: "off",
    placeholder: "DD / MM / YYYY"
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "label-calendar",
    htmlFor: "calendar-input"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _calendarcalendarIcon.default,
    alt: "",
    className: "img"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group form-group__green-light"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "",
    className: "form-label"
  }, "\xA0"), /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group input-group__green-light input-group__search "
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "seach-box"
  }, " ", /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box "
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _search.default,
    alt: "",
    className: "img"
  }))), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Search",
    className: "form-input form-input_search"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group form-group__green-light"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "",
    className: "form-label"
  }, "Textarea"), /*#__PURE__*/_react.default.createElement("textarea", {
    name: "",
    id: "",
    cols: "30",
    rows: "5",
    style: {
      resize: "unset"
    },
    placeholder: "Placeholder Here",
    className: "form-input"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "error-text"
  }, "There is an error with the values you provided")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group form-group__green-light"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "",
    className: "form-label"
  }, "Mobile Number"), /*#__PURE__*/_react.default.createElement(_reactPhoneInput.default, {
    country: "ng",
    containerClass: "form-input-calendar",
    inputClass: "",
    enableSearchField: true,
    disableSearchIcon: true,
    placeholder: "",
    onlyCountries: ["ng"]
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "error-text"
  }, "There is an error with the values you provided")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group form-group__green-light"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "",
    className: "form-label"
  }, "\xA0"), /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group input-group__green-light input-group__phone"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "phone-wrap"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box "
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _NGflagSelect.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("span", null, "+234"), /*#__PURE__*/_react.default.createElement("svg", {
    className: "down-icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
  }))), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "",
    className: "form-input form-input_search"
  }))));
};
var _default = InputFields;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _testArrowIcon = _interopRequireDefault(require("../img/test-arrow-icon.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Pagination = function Pagination() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination-wrap pagination-wrap__green-light"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "child"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
  })), " ", "prev"), /*#__PURE__*/_react.default.createElement("p", {
    className: "child current"
  }, "1"), /*#__PURE__*/_react.default.createElement("p", {
    className: "child active"
  }, "2"), /*#__PURE__*/_react.default.createElement("p", {
    className: "child "
  }, "3"), /*#__PURE__*/_react.default.createElement("p", {
    className: "child active"
  }, "next", " ", /*#__PURE__*/_react.default.createElement("svg", {
    className: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
  }))));
};
var _default = Pagination;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var RadioCheck = function RadioCheck() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      gap: "2rem",
      flexDirection: "row"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "radio-box-wrap"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: "input-radio-one",
    className: "input-radio input-radio"
    //   checked={true}
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "label-radio label-radio__green-light",
    for: "input-radio-one"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "check"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "radio-box-wrap"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: "input-radio-two",
    className: "input-radio input-radio"
    //   checked={true}
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "label-radio label-radio__black-light",
    for: "input-radio-two"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "check"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "radio-box-wrap"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: "input-radio-three",
    className: "input-radio input-radio"
    //   checked={true}
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "label-radio label-radio__purple-light",
    for: "input-radio-three"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "check"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "radio-box-wrap"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: "input-radio-four",
    className: "input-radio input-radio"
    //   checked={true}
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "label-radio label-radio__orange-light",
    for: "input-radio-four"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "check"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "radio-box-wrap"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: "input-radio-five",
    className: "input-radio input-radio"
    //   checked={true}
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "label-radio label-radio__deep-green-light",
    for: "input-radio-five"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "check"
  })))));
};
var _default = RadioCheck;
exports.default = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactSelect = _interopRequireDefault(require("react-select"));
var _tableIcon = _interopRequireDefault(require("../img/table-icon.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SmallTable = function SmallTable() {
  var _useState = (0, _react.useState)({
      label: "amount",
      value: "amount"
    }),
    _useState2 = _slicedToArray(_useState, 2),
    selectValue = _useState2[0],
    setSelectValue = _useState2[1];
  var reactSelectStyleTable = {
    control: function control(base, state) {
      return _objectSpread(_objectSpread({}, base), {}, {
        border: state.isFocused ? 0 : 0,
        // backgroundColor: state.isSelected ? "#6F6F6F" : "white",
        boxShadow: state.isFocused ? 0 : 0,
        "&:hover": {
          // border: state.isFocused ? 0 : 0
        }
      });
    },
    option: function option(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        backgroundColor: state.isSelected ? "#0b8376" : "white"
      });
    }
  };
  var optionTable = [{
    label: "Date",
    value: "date"
  }, {
    label: "Type",
    value: "type"
  }, {
    label: "Value",
    value: "value"
  }, {
    label: "Direction",
    value: "Direction"
  }, {
    label: "Amount",
    value: "amount"
  }];
  var testList = [{
    name: "timi test",
    bank: "gtb",
    amount: "#120,920",
    date: "12/03/1995",
    type: "debit",
    value: "keke"
  }, {
    name: "tayo test",
    bank: "zenith",
    amount: "#92,830",
    date: "12/03/1995",
    type: "debit",
    value: "keke"
  }, {
    name: "nonso test",
    bank: "raven",
    amount: "#5,180",
    date: "12/03/1995",
    type: "debit",
    value: "keke"
  }, {
    name: "bolu test",
    bank: "uba",
    amount: "#67,140",
    date: "12/03/1995",
    type: "debit",
    value: "keke"
  }];
  var formatHeaderListOption = function formatHeaderListOption(list) {
    var newList = list.filter(function (chi) {
      return (chi === null || chi === void 0 ? void 0 : chi.value) !== (selectValue === null || selectValue === void 0 ? void 0 : selectValue.value);
    });
    return newList;
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mobile-table-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }, "NARRATION"), /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }, /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
    styles: reactSelectStyleTable,
    className: "select-title",
    value: selectValue,
    options: formatHeaderListOption(optionTable),
    onChange: function onChange(e) {
      setSelectValue(e);
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mobile-body"
  }, testList.map(function (chi, idx) {
    var name = chi.name,
      amount = chi.amount,
      bank = chi.bank,
      date = chi.date,
      type = chi.type,
      value = chi.value;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: idx,
      className: "table-row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "value"
    }, /*#__PURE__*/_react.default.createElement("figure", {
      className: "img-box"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _tableIcon.default,
      alt: "",
      className: "img"
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "text-box"
    }, " ", /*#__PURE__*/_react.default.createElement("p", {
      className: "value-one"
    }, name), /*#__PURE__*/_react.default.createElement("p", {
      className: "value-two"
    }, bank))), /*#__PURE__*/_react.default.createElement("div", {
      className: "value"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "text-box"
    }, " ", /*#__PURE__*/_react.default.createElement("p", {
      className: "value-one "
    }, chi["".concat(selectValue.value)]), /*#__PURE__*/_react.default.createElement("p", {
      className: "value-two"
    }))));
  })));
};
var _default = SmallTable;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _tableIcon = _interopRequireDefault(require("../img/table-icon.svg"));
var _editIcon = _interopRequireDefault(require("../img/edit-icon.svg"));
var _actionIcon = _interopRequireDefault(require("../img/action-icon.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var TableStrip = function TableStrip() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("table", {
    className: "table table_strip"
  }, /*#__PURE__*/_react.default.createElement("thead", {
    className: "table-head"
  }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "NARRATION"), /*#__PURE__*/_react.default.createElement("th", null, "TYPE"), /*#__PURE__*/_react.default.createElement("th", null, "AMOUNT"), /*#__PURE__*/_react.default.createElement("th", null, "TRANSACTION DATE"), /*#__PURE__*/_react.default.createElement("th", null, "ACTION(S)"))), /*#__PURE__*/_react.default.createElement("tbody", {
    className: "table-body"
  }, /*#__PURE__*/_react.default.createElement("tr", {
    className: "table-row"
  }, /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "img-text"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _tableIcon.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("span", null, "Olakunle Olutayo \u2014 GTBank"))), /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, "Money Received"), /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, "\u20A612,000,000.00"), /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, "5 Sept, 2022 - 5:48PM"), /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, " ", /*#__PURE__*/_react.default.createElement("div", {
    className: "action-box"
  }, " ", /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _editIcon.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _actionIcon.default,
    alt: "",
    className: "img"
  }))))), /*#__PURE__*/_react.default.createElement("tr", {
    className: "table-row"
  }, /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, " ", /*#__PURE__*/_react.default.createElement("div", {
    className: "img-text"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _tableIcon.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("span", null, "Olakunle Olutayo \u2014 GTBank"))), /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, "Money Received"), /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, "\u20A612,000,000.00"), /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, "5 Sept, 2022 - 5:48PM"), /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "action-box"
  }, " ", /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _editIcon.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _actionIcon.default,
    alt: "",
    className: "img"
  }))))))));
};
var _default = TableStrip;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _tableIcon = _interopRequireDefault(require("../img/table-icon.svg"));
var _editIcon = _interopRequireDefault(require("../img/edit-icon.svg"));
var _actionIcon = _interopRequireDefault(require("../img/action-icon.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Tables = function Tables() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("table", {
    className: "table"
  }, /*#__PURE__*/_react.default.createElement("thead", {
    className: "table-head"
  }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "NARRATION"), /*#__PURE__*/_react.default.createElement("th", null, "TYPE"), /*#__PURE__*/_react.default.createElement("th", null, "AMOUNT"), /*#__PURE__*/_react.default.createElement("th", null, "TRANSACTION DATE"), /*#__PURE__*/_react.default.createElement("th", null, "ACTION(S)"))), /*#__PURE__*/_react.default.createElement("tbody", {
    className: "table-body"
  }, /*#__PURE__*/_react.default.createElement("tr", {
    className: "table-row"
  }, /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "img-text"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _tableIcon.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("span", null, "Olakunle Olutayo \u2014 GTBank"))), /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, "Money Received"), /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, "\u20A612,000,000.00"), /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, "5 Sept, 2022 - 5:48PM"), /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, " ", /*#__PURE__*/_react.default.createElement("div", {
    className: "action-box"
  }, " ", /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _editIcon.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _actionIcon.default,
    alt: "",
    className: "img"
  }))))), /*#__PURE__*/_react.default.createElement("tr", {
    className: "table-row"
  }, /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, " ", /*#__PURE__*/_react.default.createElement("div", {
    className: "img-text"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _tableIcon.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("span", null, "Olakunle Olutayo \u2014 GTBank"))), /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, "Money Received"), /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, "\u20A612,000,000.00"), /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, "5 Sept, 2022 - 5:48PM"), /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "action-box"
  }, " ", /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _editIcon.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _actionIcon.default,
    alt: "",
    className: "img"
  }))))))));
};
var _default = Tables;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var TabsAndTabLinks = function TabsAndTabLinks() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "tab-link-parent mb-20"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link tab-link__black-light text-white-light"
  }, "All"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Today"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Last 7days"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Last 14days"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Last 30days"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Custom")), /*#__PURE__*/_react.default.createElement("div", {
    className: "tab-link-parent mb-20"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "All"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Today"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Last 7days"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Last 14days"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Last 30days"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link tab-link__purple-light"
  }, "Custom")), /*#__PURE__*/_react.default.createElement("div", {
    className: "tab-link-parent mb-20"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "All"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Today"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Last 7days"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Last 14days"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link tab-link__green-light"
  }, "Last 30days"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Custom")), /*#__PURE__*/_react.default.createElement("div", {
    className: "tab-link-parent mb-20"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "All"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Today"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link tab-link_faded"
  }, "Last 7days"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Last 14days"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Last 30days"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Custom")), /*#__PURE__*/_react.default.createElement("div", {
    className: "tab-link-parent mb-20"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "All"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Today"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Last 7days"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link tab-link_faded"
  }, "Last 14days"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Last 30days"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tab-link"
  }, "Custom")));
};
var _default = TabsAndTabLinks;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _errorToastIcon = _interopRequireDefault(require("../img/error-toast-icon.svg"));
var _toastSuccessIcon = _interopRequireDefault(require("../img/toast-success-icon.svg"));
var _toastWarningIcon = _interopRequireDefault(require("../img/toast-warning-icon.svg"));
var _toastInfoIcon = _interopRequireDefault(require("../img/toast-info-icon.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Toasts = function Toasts() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "toast-wrap toast-wrap__error"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _errorToastIcon.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Oooopps there\u2019s a mistake Password should have at least 1 capital letter"), /*#__PURE__*/_react.default.createElement("div", {
    className: "cancel"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-20 mb-20"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "toast-wrap toast-wrap__success"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _toastSuccessIcon.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Oooopps there\u2019s a mistake Password should have at least 1 capital letter"), /*#__PURE__*/_react.default.createElement("div", {
    className: "cancel"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-20 mb-20"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "toast-wrap toast-wrap__info"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _toastInfoIcon.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Oooopps there\u2019s a mistake Password should have at least 1 capital letter"), /*#__PURE__*/_react.default.createElement("div", {
    className: "cancel"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-20 mb-20"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "toast-wrap toast-wrap__warning"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _toastWarningIcon.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Oooopps there\u2019s a mistake Password should have at least 1 capital letter"), /*#__PURE__*/_react.default.createElement("div", {
    className: "cancel"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
  })))));
};
var _default = Toasts;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ToogleSlide = function ToogleSlide() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      gap: "2rem"
    },
    className: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "toggle-wrap"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "",
    id: "toggle-slide-one",
    className: "toggle-input"
  }), /*#__PURE__*/_react.default.createElement("label", {
    for: "toggle-slide-one",
    className: "toggle-label toggle-label__green-light"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "child-one"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "child-two"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "toggle-wrap"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "",
    id: "toggle-slide-two",
    className: "toggle-input"
  }), /*#__PURE__*/_react.default.createElement("label", {
    for: "toggle-slide-two",
    className: "toggle-label toggle-label__purple-light"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "child-one"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "child-two"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "toggle-wrap"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "",
    id: "toggle-slide-three",
    className: "toggle-input"
  }), /*#__PURE__*/_react.default.createElement("label", {
    for: "toggle-slide-three",
    className: "toggle-label toggle-label__black-light"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "child-one"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "child-two"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "toggle-wrap"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "",
    id: "toggle-slide-four",
    className: "toggle-input"
  }), /*#__PURE__*/_react.default.createElement("label", {
    for: "toggle-slide-four",
    className: "toggle-label toggle-label__deep-green-light"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "child-one"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "child-two"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "toggle-wrap"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "",
    id: "toggle-slide-five",
    className: "toggle-input"
  }), /*#__PURE__*/_react.default.createElement("label", {
    for: "toggle-slide-five",
    className: "toggle-label toggle-label__orange-light"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "child-one"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "child-two"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "toggle-wrap"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "",
    id: "toggle-slide-six",
    className: "toggle-input"
  }), /*#__PURE__*/_react.default.createElement("label", {
    for: "toggle-slide-six",
    className: "toggle-label toggle-label__blue-light"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "child-one"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "child-two"
  })))));
};
var _default = ToogleSlide;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _toolTipMascot = _interopRequireDefault(require("../img/tool-tip-mascot.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ToolTips = function ToolTips() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      minHeight: "100vh",
      gridTemplateRows: "repeat(10, 1fr"
    },
    className: "tool-tip-grid-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "relative"
    },
    className: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tool-tip-wrap tool-tip-wrap__black-light tool-tip-wrap_top-center"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Hi there I Am a Tooltip"))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "relative"
    },
    className: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tool-tip-wrap tool-tip-wrap__black-light tool-tip-wrap_bottom-center"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Hi there I Am a Tooltip"))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "relative"
    },
    className: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tool-tip-wrap tool-tip-wrap__black-light tool-tip-wrap_top-left"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Hi there I Am a Tooltip"))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "relative"
    },
    className: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tool-tip-wrap tool-tip-wrap__orange-light tool-tip-wrap_bottom-right"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Hi there I Am a Tooltip"))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "relative"
    },
    className: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tool-tip-wrap tool-tip-wrap__deep-green-light tool-tip-wrap_top-right"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Hi there I Am a Tooltip"))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "relative"
    },
    className: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tool-tip-wrap tool-tip-wrap__black-light tool-tip-wrap_bottom-left"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Hi there I Am a Tooltip"))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "relative",
      transform: "translateX(15rem)"
    },
    className: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tool-tip-wrap tool-tip-wrap__green-light tool-tip-wrap_left"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Hi there I Am a Tooltip"))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "relative",
      transform: "translateX(10rem)"
    },
    className: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tool-tip-wrap tool-tip-wrap__purple-light tool-tip-wrap_right"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Hi there I Am a Tooltip"))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "relative",
      transform: "translateX(-100%)"
    },
    className: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tool-tip-wrap tool-tip_mascot tool-tip-wrap_big tool-tip-wrap__black-light tool-tip-wrap_bottom-center"
  }, /*#__PURE__*/_react.default.createElement("figure", {
    className: "img-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _toolTipMascot.default,
    alt: "",
    className: "img"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "title"
  }, "Yeah Cool Right"), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iste beatae. Tempora deserunt fuga distinctio odio excepturi eaque vero! Est obcaecati dolore non ad minima, mollitia nulla"), /*#__PURE__*/_react.default.createElement("p", {
    className: "got"
  }, "Got it!"))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "relative",
      transform: "translateX(0%) translateY(30rem)"
    },
    className: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tool-tip-wrap tool-tip-wrap_big tool-tip-wrap__deep-green-light tool-tip-wrap_top-center"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "title"
  }, "Yeah Cool Right"), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iste beatae. Tempora deserunt fuga distinctio odio excepturi eaque vero! Est obcaecati dolore non ad minima, mollitia nulla"), /*#__PURE__*/_react.default.createElement("p", {
    className: "got"
  }, "Got it!")))));
};
var _default = ToolTips;
exports.default = _default;
