import "tailwindcss/base.css"
import "tailwindcss/components.css"
import "tailwindcss/utilities.css"

import React from "react"
import ReactDOM from "react-dom"
import Keyboard from './index'

ReactDOM.render(<Keyboard style={{ display: "none" }} />, document.querySelector("#app"))