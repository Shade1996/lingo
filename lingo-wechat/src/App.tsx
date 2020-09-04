import React, { useState } from "react"
import WelcomePage from "./components/WelcomePage";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import DemoPage from "./components/DemoPage";
import TotalLessonPage from "./components/TotalLessonPage";

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: blue
    }
})

const App = () => {
    const [dialogOpen, setDialogOpen] = React.useState(false);

    return (
        <ThemeProvider theme={theme}>
            {/* <WelcomePage /> */}
            {/* <DemoPage /> */}
            <TotalLessonPage />
        </ThemeProvider>
    )
}
export default App