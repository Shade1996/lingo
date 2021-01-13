import "tailwindcss/base.css"
import "tailwindcss/components.css"
import "tailwindcss/utilities.css"
import "./App.css"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(React.createElement(App), document.querySelector("#app"))
// module.hot?.accept()