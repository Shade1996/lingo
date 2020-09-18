import React from 'react';
import Button from '@material-ui/core/Button'
import { List, ListSubheader, ListItem, ListItemText } from '@material-ui/core';
import useWindowSize from '../useWindowSize';
import { setCurrentPage, useClassRoomData, setCurrentClassRoomData } from '../state';

const StudentPage = () =>{
    const windowSize = useWindowSize()
    const [classRoomData] = useClassRoomData()

    return(
        <div>
            <div className="w-screen h-screen">
                <div className="flex flex-col items-center justify-around h-screen w-screen p-10">
                    <h1>Students</h1>
                    <div className="flex flex-col items-center flex-grow w-full">
                        <div className="w-full overflow-scroll" style={{ height: windowSize.height - 100 }}>
                        <List component="nav" aria-label="secondary mailbox folders">
                            {classRoomData.map((data, i) => (
                                <ListItem key={i} button>
                                    <ListItemText primary={data.name} onClick={() => {
                                        setCurrentPage("change")
                                        setCurrentClassRoomData(data)
                                    }}/>
                                </ListItem>
                            ))}
                        </List>
                        </div>
                        {/* <Button variant="contained" color="primary" fullWidth onClick={() => setCurrentPage("add")}>
                            +
                        </Button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StudentPage