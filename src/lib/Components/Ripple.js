import React, { useEffect, useRef, useCallback } from "react";

const Ripple = ({ color, duration, rippleOnClick }) => {
	const rippleRef = useRef(null);
	const rippleStyles = {};
	if (color) {
		rippleStyles["backgroundColor"] = color;
	}
	if (!rippleOnClick && duration) {
		rippleStyles["transitionDuration"] = `${duration}s`;
	}
	const setBoundingRect = useCallback(({ e, parentElement }) => {
		const parentOffset = parentElement.getBoundingClientRect();
		const relX = e.clientX - parentOffset.left;
		const relY = e.clientY - parentOffset.top;
		const s =
			parentOffset.width > parentOffset.height
				? parentOffset.width
				: parentOffset.height;
		rippleRef.current.style.left = `${relX - s / 2}px`;
		rippleRef.current.style.top = `${relY - s / 2}px`;
		rippleRef.current.style.width = `${s}px`;
		rippleRef.current.style.height = `${s}px`;
	}, []);

	useEffect(() => {
		const { parentElement } = rippleRef.current;
		const handleMouseOver = (e) => {
			setBoundingRect({ e, parentElement });
		};
		const handleMouseOut = (e) => {
			setBoundingRect({ e, parentElement });
		};
		const time = duration ? duration * 1000 : 700;
		const handleClick = (e) => {
			const scaleItem = [
				{ transform: "scale(0)" },
				{ transform: "scale(1.8)" },
				{ opacity: "0.5" },
				{ transform: "scale(2.1)" },
				{ opacity: "0" },
			];
			setBoundingRect({ e, parentElement });
			rippleRef.current.animate(scaleItem, {
				duration: time,
				iterations: 1,
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
	return (
		<>
			<span className="btn-rr__ripple" style={rippleStyles} ref={rippleRef} />
		</>
	);
};

export default Ripple;
