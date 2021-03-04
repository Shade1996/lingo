import React from "react"
import { useTheme } from "@pinyinma/playground-theme"
import { AppBar, InputBase, Paper, ThemeProvider, Toolbar } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import MediaGrid from "./components/MediaGrid";
import SoundGrid from "./components/SoundGrid";
import { useProxy } from "valtio";
import { searchState } from "./state";

const App: React.FC = () => {
    const [theme] = useTheme()
    useProxy(searchState)
    searchState.value="sound"
    return (
        <ThemeProvider theme={theme}>
            <Paper className="h-screen w-screen absolute top-0 overflow-scroll overflow-x-hidden bg-gray-600" elevation={2} square={true}>
                <AppBar color="default" position="sticky">
                    <Toolbar>
                        <div className="bg-gray-800 rounded-sm ml-4">
                            <InputBase className="px-2"
                            placeholder="Search…"
                            />
                            <SearchIcon />
                        </div>
                    </Toolbar>
                </AppBar>
                    {(() => {
                        //@ts-ignore
                        if (searchState.value === "sound" )
                            return <SoundGrid />
                        if(searchState.value === "media")
                            return <MediaGrid />
                    })()}
            </Paper>
        </ThemeProvider>
    )
}

export default App