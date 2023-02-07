import React from "react";
import Ripple from "./Ripple";
import "./link.css";

const trimWhiteSpace = (str) => str.trim();

const Link = (props) => {
	const {className = "", as, variant, label, rippleColor, icon, iconPosition, rounded, flate, block, disabled, active, duration, rippleOnClick, ...rest
	} = props;
	const onClick = (event) => {
		if (event.metaKey || event.ctrlKey) {
			return;
		}
		event.preventDefault();
		window.history.pushState({}, "", props.href);
		const navEvent = new PopStateEvent("popstate");
		window.dispatchEvent(navEvent);
	};
	const RippleBtnProps = {};
	if (rippleColor) {RippleBtnProps["color"] = rippleColor;}
	if (duration) {RippleBtnProps["duration"] = duration;}
	if (rippleOnClick) {RippleBtnProps["rippleOnClick"] = rippleOnClick;}
	const btnClass = trimWhiteSpace(
		`btn-rr${variant ? ` btn-rr--${variant}` : ""}${
			className ? ` ${className}` : ""
		}${icon ? " btn-rr--icon-txt" : ""}${
			iconPosition === "end" ? " btn-rr--icon-end" : ""
		}${rounded ? " btn-rr--rounded" : ""}${flate ? " btn-rr--flate" : ""}${
			block ? " btn-rr--block" : ""
		}${disabled ? " disabled" : ""}${active ? " active" : ""}${
			rippleOnClick ? " btn-rr--ripple-click" : ""
		}`
	);
	return (
		<>
			{as === "button" ? (
				<button className={btnClass} {...rest}>
					{icon ? <span className="btn-rr__icon">{icon}</span> : ""}
					{label} {props.children}
					<Ripple {...RippleBtnProps} />
				</button>
			) : (
				<a className={btnClass} {...rest} onClick={onClick}>
					{icon ? <span className="btn-rr__icon">{icon}</span> : ""}
					{label} {props.children}
					<Ripple {...RippleBtnProps} />
					{/* {rippleColor ? (
						<Ripple color={rippleColor} />
					) : duration ? (
						<Ripple duration={duration} />
					) : duration && rippleColor ? (
						<Ripple color={rippleColor} duration={duration} />
					) : rippleOnClick ? (
						<Ripple rippleOnClick={rippleOnClick} />
					) : rippleOnClick && rippleColor ? (
						<Ripple rippleOnClick={rippleOnClick} color={rippleColor} />
					) : rippleOnClick && duration ? (
						<Ripple rippleOnClick={rippleOnClick} duration={duration} />
					) : rippleOnClick && rippleColor && duration ? (
						<Ripple
							rippleOnClick={rippleOnClick}
							duration={duration}
							color={rippleColor}
						/>
					) : (
						<Ripple />
					)} */}
				</a>
			)}
		</>
	);
};

export default Link;
