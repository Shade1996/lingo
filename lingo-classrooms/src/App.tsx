import React, { useState } from "react"
import CityPage from "./components/CityPage";
import AddPage from "./components/AddPage";
import { useCurrentPage } from "./state";
import ControlPage from "./components/ControlPage";

const App = () => {
    const [currentPage] = useCurrentPage()

    if (currentPage === "city")
        return <CityPage />

    if (currentPage === "add")
        return <AddPage />

    else if (currentPage === "control")
        return <ControlPage />

    else
        return <div>page not found</div>
}
export default App