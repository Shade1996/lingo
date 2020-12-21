import "tailwindcss/base.css"
import "tailwindcss/components.css"
import "tailwindcss/utilities.css"
import "./App.css"

import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App />, document.querySelector("#app"))

// module.hot?.accept()