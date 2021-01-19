import React from "react"
import CodePage from "./page/CodePage"
import DisplayPage from "./page/DisplayPage"
import 'antd/dist/antd.css'
import { useProxy } from "valtio"
import { page } from "./state"

const App: React.FC = () => {
    useProxy(page)

    return (
        <>
            <DisplayPage />
            {page.value === "lesson" && <CodePage />}
        </>
    )

}

export default App