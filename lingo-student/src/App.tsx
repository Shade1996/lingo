import React, { useState } from "react"
import StudentPage from "./components/StudentPage";
import { useCurrentPage } from "./state";
import ControlPage from "./components/ControlPage";
import ChangePage from "./components/ChangePage";

const App = () => {
    const [currentPage] = useCurrentPage()

    if (currentPage === "student")
        return <StudentPage />

    if (currentPage === "change")
        return <ChangePage />

    // else if (currentPage === "control")
    //     return <ControlPage />

    else
        return <div>page not found</div>
}
export default App