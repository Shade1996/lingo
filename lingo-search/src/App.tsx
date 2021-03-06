import React from "react"
import { useTheme } from "@pinyinma/playground-theme"
import "@pinyinma/playground-css"
import { AppBar, InputBase, Paper, ThemeProvider, Toolbar } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import MediaGrid from "./components/MediaGrid";
import SoundGrid from "./components/SoundGrid";
import { useProxy } from "valtio";
import { searchState } from "./state";
import SoundCards from "./components/SoundCards";

const App: React.FC = () => {
    const [theme] = useTheme()
    useProxy(searchState)
    searchState.value="sound"
    return (
        <ThemeProvider theme={theme}>
            <Paper className="h-screen w-screen absolute top-0 overflow-scroll overflow-x-hidden" elevation={0} square={true} style={{
                backgroundColor: theme.customPalette.background.darker1
            }}>
                <AppBar position="sticky" elevation={0} className="bg-transparent bg-blur bg-black bg-opacity-25">
                    <Toolbar variant="dense">
                        <div className="rounded-sm ml-4 container flex items-center" style={{ background: theme.customPalette.background.lighter0 }}>
                            <InputBase className="px-2 w-full" placeholder="Search…" />
                            <SearchIcon />
                        </div>
                    </Toolbar>
                </AppBar>
                <div className="container ml-10">
                    <div className="flex w-full gap-6">
                        <div className="w-1/2 flex justify-center items-center py-6">
                            <SoundCards />
                        </div>
                        <div className="w-1/2 flex justify-center items-center py-6">
                            <SoundCards />
                        </div>
                    </div>
                </div>
                    {/* {(() => {
                        //@ts-ignore
                        if (searchState.value === "sound" )
                            return <SoundGrid />
                        if(searchState.value === "media")
                            return <MediaGrid />
                    })()} */}
            </Paper>
        </ThemeProvider>
    )
}

export default App