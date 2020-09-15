import React, { useState } from "react"
import WelcomePage from "./components/WelcomePage";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import DemoPage from "./components/DemoPage";
import TotalLessonPage from "./components/TotalLessonPage";
import LevelPage from "./components/LevelPage";
import { useCurrentPage } from "./state";

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: blue
    }
})

const App = () => {
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [currentPage] = useCurrentPage()

    if (currentPage === "welcome")
        return <ThemeProvider theme={theme}>
                <WelcomePage />
                </ThemeProvider>

    if (currentPage === "level")
        return <ThemeProvider theme={theme}>
                <LevelPage />
                </ThemeProvider>

    else if (currentPage === "total")
        return <ThemeProvider theme={theme}>
                <TotalLessonPage />
                </ThemeProvider>
    else
        return <div>page not found</div>
    // return (
    //     <ThemeProvider theme={theme}>
    //         {/* <WelcomePage /> */}
    //         {/* <DemoPage /> */}
    //         {/* <TotalLessonPage /> */}
    //         <LevelPage />
    //     </ThemeProvider>
    // )
}
export default App