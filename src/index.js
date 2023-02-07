import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./pages/App";
import "./assets/css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<App />
	</BrowserRouter>
);
