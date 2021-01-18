import React from "react"
import CodePage from "./page/CodePage"
import DisplayPage from "./page/DisplayPage"
import 'antd/dist/antd.css'
import { useProxy } from "valtio"
import { page } from "./state"

const App: React.FC = () => {
    useProxy(page)

    if (page.value === "home")
        return <DisplayPage />
    
    if (page.value === "lesson")
        return <CodePage />

    return <div>unexpected page value</div>
    // return <CodePage />

}

export default App