import React from "react"
import ReactDOM from "react-dom"

import "./App.css"
import App from "./App"
import ChangePage from "./components/ChangePage"

ReactDOM.render(<App />, document.getElementById("app"))

module.hot?.accept();