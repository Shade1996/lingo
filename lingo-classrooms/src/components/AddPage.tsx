import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, TextField, Dialog } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { setCurrentPage, setClassRoomData, useClassRoomData } from '../state';
import axios from "axios"

const AddPage = () =>{
    const [dialogOpen, setDialogOpen] = useState(false)
    const [dialogMessage, setDialogMessage] = useState("")
    const [classRoomData] = useClassRoomData()

    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [classRoomId, setClassRoomId] = useState("")
    const [name, setName] = useState("")
    
    const submit = async () => {
        const query = `
            mutation {
                classRoomCreate(city:"${city}", address:"${address}", classRoomId:"${classRoomId}", name:"${name}") {
                    recordId
                }
            }
        `;
        try {
            const result: any = await axios.post("/graphql", { query });
            setClassRoomData([...classRoomData, { city, address, classRoomId, name }])
            setDialogMessage("成功")
            setDialogOpen(true)
        }
        catch {
            setDialogMessage("出错了")
            setDialogOpen(true)
        }
    }

    return(
        <div>
            <AppBar position="fixed">
                <Toolbar>
                <IconButton edge="start" color="inherit" onClick={() => setCurrentPage("city")}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h6">
                    
                </Typography>
                </Toolbar>
            </AppBar>
            <form className="flex flex-col p-10 h-screen justify-center" noValidate autoComplete="off">
                <TextField label="城市" onChange={e => setCity(e.target.value)} />
                <TextField label="地址" onChange={e => setAddress(e.target.value)}  />
                <TextField label="教室号" onChange={e => setClassRoomId(e.target.value)}  />
                <TextField label="教室名" onChange={e => setName(e.target.value)}  />
                
                <div className="mt-20 w-full">
                    <Button variant="contained" color="primary" fullWidth onClick={submit}>
                        Ok
                    </Button>
                </div>
            </form>
            <Dialog onClose={() => setDialogOpen(false)} open={dialogOpen}>
                <div className="w-48 h-48 flex flex-col items-center justify-center">
                    <div className="mb-10">{dialogMessage}</div>
                    <Button variant="contained" color="primary" onClick={() => setDialogOpen(false)}>
                        Ok
                    </Button>
                </div>
            </Dialog>
        </div>
    )
}
export default AddPage