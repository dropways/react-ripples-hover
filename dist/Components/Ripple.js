"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Ripple = _ref => {
  let {
    color,
    duration,
    rippleOnClick
  } = _ref;
  const rippleRef = (0, _react.useRef)(null);
  const rippleStyles = {};
  if (color) {
    rippleStyles["backgroundColor"] = color;
  }
  if (!rippleOnClick && duration) {
    rippleStyles["transitionDuration"] = "".concat(duration, "s");
  }
  const setBoundingRect = (0, _react.useCallback)(_ref2 => {
    let {
      e,
      parentElement
    } = _ref2;
    const parentOffset = parentElement.getBoundingClientRect();
    const relX = e.clientX - parentOffset.left;
    const relY = e.clientY - parentOffset.top;
    const s = parentOffset.width > parentOffset.height ? parentOffset.width : parentOffset.height;
    rippleRef.current.style.left = "".concat(relX - s / 2, "px");
    rippleRef.current.style.top = "".concat(relY - s / 2, "px");
    rippleRef.current.style.width = "".concat(s, "px");
    rippleRef.current.style.height = "".concat(s, "px");
  }, []);
  (0, _react.useEffect)(() => {
    const {
      parentElement
    } = rippleRef.current;
    const handleMouseOver = e => {
      setBoundingRect({
        e,
        parentElement
      });
    };
    const handleMouseOut = e => {
      setBoundingRect({
        e,
        parentElement
      });
    };
    const time = duration ? duration * 1000 : 700;
    const handleClick = e => {
      const scaleItem = [{
        transform: "scale(0)"
      }, {
        transform: "scale(1.8)"
      }, {
        opacity: "0.5"
      }, {
        transform: "scale(2.1)"
      }, {
        opacity: "0"
      }];
      setBoundingRect({
        e,
        parentElement
      });
      rippleRef.current.animate(scaleItem, {
        duration: time,
        iterations: 1
      });
    };
    if (rippleOnClick) {
      parentElement.addEventListener("click", handleClick);
    } else {
      parentElement.addEventListener("focusin", handleMouseOver);
      parentElement.addEventListener("focusout", handleMouseOut);
      parentElement.addEventListener("mouseover", handleMouseOver);
      parentElement.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      if (rippleOnClick) {
        parentElement.removeEventListener("click", handleClick);
      } else {
        parentElement.removeEventListener("focusin", handleMouseOver);
        parentElement.removeEventListener("focusout", handleMouseOut);
        parentElement.removeEventListener("mouseover", handleMouseOver);
        parentElement.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-rr__ripple",
    style: rippleStyles,
    ref: rippleRef
  }));
};
var _default = Ripple;
exports.default = _default;