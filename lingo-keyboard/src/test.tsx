import "tailwindcss/base.css"
import "tailwindcss/components.css"
import "tailwindcss/utilities.css"

import React, { useState } from "react"
import ReactDOM from "react-dom"
import Keyboard from './index'

const App = () => {
    const [showKeyboard, setShowKeyboard] = useState(true)

    return (
        <Keyboard onKey={key => console.log(key)} show={showKeyboard} onHide={() => setShowKeyboard(false)} />
    )
}

ReactDOM.render(<App />, document.querySelector("#app"))