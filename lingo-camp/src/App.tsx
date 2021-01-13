import React from "react"
import Keyboard from "react-coding-keyboard"
import { Spring } from "react-spring/renderprops"
import { useProxy } from "valtio"
import Buttons from "./components/Buttons"
import Code from "./components/Code"
import CodeInfo from "./components/CodeInfo"
import LingoMenu from "./components/LingoMenu"
import { showKeyboard } from "./state"

const App: React.FC = () => {
    useProxy(showKeyboard)

    return (
        <div>
            <LingoMenu />
            <div className="p-4">
                <CodeInfo />
                <Code />
                <Buttons />
            </div>
            <Spring from={{ y: 100 }} to={{ y: showKeyboard.value ? 0 : 100 }}>
                {p => (
                    <Keyboard style={{ transform: `translateY(${p.y}%)` }} />
                )}
            </Spring>
        </div>
    )
}

export default App