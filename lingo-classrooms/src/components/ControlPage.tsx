import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Switch, Button } from '@material-ui/core';
import { setCurrentPage, useCurrentClassRoomData } from '../state';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

let classId = 1;

const ControlPage = () =>{

    const [classStarted, setClassStarted] = useState(false)
    const [currentClassRoomData] = useCurrentClassRoomData()

    return(
        <div className="flex flex-col items-center h-screen justify-evenly">
            <AppBar position="fixed">
                <Toolbar>
                <IconButton edge="start" color="inherit" onClick={() => setCurrentPage("city")}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h6">
                    控制面板
                </Typography>
                </Toolbar>
            </AppBar>
            <h1>
                {`Class ${currentClassRoomData?.name}`}
            </h1>

            <Switch
                checked={classStarted}
                onClick={() => setClassStarted(!classStarted)}
                name="checkedB"
                color="primary"
            />
            <Button variant="contained" color="primary">
            下一步
            </Button>
        </div>
    )
}
export default ControlPage