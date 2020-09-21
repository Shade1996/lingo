import "tailwindcss/dist/components";
import "tailwindcss/dist/base";
import "tailwindcss/dist/utilities";
import "web-animations-js";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import LevelModal from "./components/modals/LevelModal";
import Support from "./pages/Support";
import PhotoPage from "./pages/PhotoPage";

ReactDOM.render(<App />, document.getElementById("app"));