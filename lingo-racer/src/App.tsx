import React from "react"
import { useProxy } from "valtio"
import Game from "./pages/Game"
import Home from "./pages/Home"
import Loading from "./pages/Loading"
import { carState, pageState, sceneState } from "./state/state"

const App = () => {
    useProxy(pageState)
    useProxy(carState)
    useProxy(sceneState)

    return (
        <>
            {pageState.pagename === "home" && <Home />}
            {pageState.pagename === "game" && <Game /> }
            {/* <Game /> */}
            {(!sceneState.loaded || !carState.loaded) && pageState.pagename === "game" ? <Loading /> : null}
        </>
    )
}

export default App