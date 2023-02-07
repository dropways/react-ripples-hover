"use strict";

require("core-js/modules/es.object.assign.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.string.trim.js");
var _react = _interopRequireDefault(require("react"));
var _Ripple = _interopRequireDefault(require("./Ripple"));
require("./link.css");
const _excluded = ["className", "as", "variant", "label", "rippleColor", "icon", "iconPosition", "rounded", "flate", "block", "disabled", "active", "duration", "rippleOnClick"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const trimWhiteSpace = str => str.trim();
const Link = props => {
  const {
      className = "",
      as,
      variant,
      label,
      rippleColor,
      icon,
      iconPosition,
      rounded,
      flate,
      block,
      disabled,
      active,
      duration,
      rippleOnClick
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  const onClick = event => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", props.href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  const RippleBtnProps = {};
  if (rippleColor) {
    RippleBtnProps["color"] = rippleColor;
  }
  if (duration) {
    RippleBtnProps["duration"] = duration;
  }
  if (rippleOnClick) {
    RippleBtnProps["rippleOnClick"] = rippleOnClick;
  }
  const btnClass = trimWhiteSpace("btn-rr".concat(variant ? " btn-rr--".concat(variant) : "").concat(className ? " ".concat(className) : "").concat(icon ? " btn-rr--icon-txt" : "").concat(iconPosition === "end" ? " btn-rr--icon-end" : "").concat(rounded ? " btn-rr--rounded" : "").concat(flate ? " btn-rr--flate" : "").concat(block ? " btn-rr--block" : "").concat(disabled ? " disabled" : "").concat(active ? " active" : "").concat(rippleOnClick ? " btn-rr--ripple-click" : ""));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, as === "button" ? /*#__PURE__*/_react.default.createElement("button", _extends({
    className: btnClass
  }, rest), icon ? /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-rr__icon"
  }, icon) : "", label, " ", props.children, /*#__PURE__*/_react.default.createElement(_Ripple.default, RippleBtnProps)) : /*#__PURE__*/_react.default.createElement("a", _extends({
    className: btnClass
  }, rest, {
    onClick: onClick
  }), icon ? /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-rr__icon"
  }, icon) : "", label, " ", props.children, /*#__PURE__*/_react.default.createElement(_Ripple.default, RippleBtnProps)));
};
var _default = Link;
exports.default = _default;