import { Button, Modal } from '@material-ui/core';
import TextField from '@material-ui/core/TextField/TextField';
import React, { useState } from 'react';
import { setCurrentPage } from '../state';

const ChangePage = () =>{
    const [open, setOpen] = useState(false)

    const body = (
        <div className="text-center w-64 space-y-10 p-6 bg-white opacity-75 rounded-lg bg-blur">
            <p className="font-semibold text-lg">
            Changed !
            </p>
            <Button variant="contained" color="primary" onClick={()=>{setCurrentPage("student")}}>
                OK
            </Button>
        </div>
      )

    return(
        <div className="container w-full h-screen mx-auto bg-white flex flex-col items-center justify-center space-y-10">
            <p>Please enter Student Name</p>
            <TextField id="outlined-basic" label="New Name" variant="outlined" />
            <Button variant="contained" color="primary" onClick={()=>{setOpen(true)}}>
            Submit
            </Button>
            <Modal
            open={open}  className="flex items-center justify-center">
                {body}
            </Modal>
        </div>
    )
}
export default ChangePage