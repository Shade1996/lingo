import React from "react"
import Game from "./pages/Game"
import Home from "./pages/Home"
import Loading from "./pages/Loading"
import { useCarLoaded } from "./state/useCarLoaded"
import { usePage } from "./state/usePage"

const App = () => {
    const [page] = usePage()
    const [carLoaded] = useCarLoaded()

    return (
        <>
            {/* {page === "home" && <Home />} */}
            {/* {page === "game" && <Game />} */}
            <Game />
            {carLoaded ? null : <Loading />}
        </>
    )
}

export default App