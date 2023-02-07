import React from "react";
import { NavLink } from "react-router-dom";
import { IconSettings2, IconFileDescription } from "@tabler/icons-react";
import "./header.css";

const Header = () => {
	return (
		<>
			<div className="header-wrap">
				<header>
					<div className="container">
						<div className="brand">
							<h1>React Ripples Hover</h1>
						</div>
						<div className="menu">
							<ul className="menu-list">
								<li>
									<NavLink to="/">
										<IconSettings2 /> Example
									</NavLink>
								</li>
								<li>
									<NavLink to="/documentation">
										<IconFileDescription /> Documentation
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</header>
			</div>
		</>
	);
};

export default Header;
