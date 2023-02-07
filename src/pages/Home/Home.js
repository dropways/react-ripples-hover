import React from "react";
import LinksVariant from "./Sections/LinksVariant";
import LinksButton from "./Sections/LinksButton";
import LinksRippleClick from "./Sections/LinksRippleClick";
import LinksRippleColor from "./Sections/LinksRippleColor";
import LinksIcon from "./Sections/LinksIcon";
import LinksStyle from "./Sections/LinksStyle";
import LinksBlock from "./Sections/LinksBlock";
import LinksActiveDisable from "./Sections/LinksActiveDisable";
import LinksDuring from "./Sections/LinksDuring";
import { ReactComponent as Logo } from "../../assets/images/ripples-logo.svg";

const Home = () => {
	return (
		<div className="demo-page">
			<div className="banner-wrap">
				<div className="container">
					<div className="logo">
						<div className="icon">
							<Logo />
						</div>
					</div>
					<div className="intro-text">
						The React Ripple effect refers to a material design inspired
						animation that adds a visual effect to an element when it is
						interacted with. The animation involves a ripple spreading out from
						the point of interaction, creating a subtle feedback to the user.
						The React Ripple effect can be added to elements such as buttons,
						icons, and other interactive components. It is typically implemented
						using CSS and JavaScript, with libraries such as React Material UI
						providing pre-built components that can be easily added to a
						project.
					</div>
				</div>
			</div>
			<div className="demo-list">
				<ul>
					<li>
						<LinksVariant />
					</li>
					<li>
						<LinksRippleClick />
					</li>
					<li>
						<LinksButton />
					</li>
					<li>
						<LinksRippleColor />
					</li>
					<li>
						<LinksIcon />
					</li>
					<li>
						<LinksStyle />
					</li>
					<li>
						<LinksBlock />
					</li>
					<li>
						<LinksActiveDisable />
					</li>
					<li>
						<LinksDuring />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Home;
