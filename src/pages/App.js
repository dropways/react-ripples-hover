import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Home from "./Home/Home";
import Documentation from "./Documentation/Documentation";

function App() {
	return (
		<>
			<Header />
			<div className="main">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/documentation" element={<Documentation />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
