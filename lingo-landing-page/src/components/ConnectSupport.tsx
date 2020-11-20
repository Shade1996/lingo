import { Fab, Popover } from '@material-ui/core'
import React from 'react'
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
//@ts-ignore
import contactSrc from "../assets/contact.jpg"
const ConnectSupport = () =>{
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
      const open = Boolean(anchorEl);
    return(
       
        <div className="fixed right-0 bottom-0 m-5 z-50">
            <Fab color="secondary" variant="extended" onClick={handleClick}>
                <ContactSupportIcon />
                <div className="ml-1">
                联系我们
                </div>
            </Fab>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                }}
            >
                <div className="text-center">
                    <img src={contactSrc} alt="contact" className="h-56 w-56"/>
                    <div className="">Maker Club 教务老师微信</div>
                    <div>电话：13918099485</div>
                </div>
            </Popover>
        </div>
    )
}

export default ConnectSupport