import React from "react"
import Game from "./pages/Game"
import Home from "./pages/Home"
import { usePage } from "./state/usePage"

const App = () => {
    const [page] = usePage()

    return (
        <>
            {/* {page === "home" && <Home />} */}
            {/* {page === "game" && <Game />} */}
            <Game />
        </>
    )
}

export default App