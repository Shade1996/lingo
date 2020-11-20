import React, { useState, useCallback } from 'react'
import { AppBar, Tabs, Toolbar, Tab, IconButton, Drawer, ListItem, List, Button, Fab } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp';
import useWindowWidth from '../utils/useWindowWidth'
import MenuIcon from '@material-ui/icons/Menu';
//@ts-ignore
import logo from '../assets/logo05.png'
//@ts-ignore
import logo1 from '../assets/logo-blue.png'

import { isMobile } from "react-device-detect"

const labels = [
  "凌高编程",
  "为何学习",
  "课程体系",
  "课程预览",
  "创始团队"
];

const AppBarNav: React.FC<{
  appBarColor: string,
  textColor: string,
  scrollPage: any,
  page: number

}> = props => {

  const windowWidth = useWindowWidth();
  const [openDrawer, setOpenDrawer] = useState(false);

  const drawerScrollPage = useCallback((i: number) => {
    props.scrollPage(i);
    setOpenDrawer(false);

  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={"select-none transition-250 change-opacity bg-blur" + ((windowWidth > 1024) ? "" : " px-3")}
      style={{ backgroundColor: props.appBarColor, color: props.textColor }}
    >

      {windowWidth > 1024 ? (
        <div className="flex">
          <div className='w-24 h-8 absolute' style={{ left: '35px' }}>
            <div className="flex">
              <img src={logo1} className="h-8 w-8 self-center" alt=""/>
              <img src={logo} className='w-full h-full' />
            </div>
          </div>
          <Toolbar variant="dense" style={{ maxWidth: 1280 }} className="mx-auto">
            <Tabs
              value={props.page}
              onChange={(ev, val) => props.scrollPage(val)}
              indicatorColor="none"
            >
              {labels.map((label, i) => (
                <Tab label={label} key={i} />
              ))}
            </Tabs>
          </Toolbar>
          <Button className="fixed text-sm invisible" style={{ right: '35px'}} variant="contained" color="primary" size="small" onClick={
            ()=>{window.open("https://www.lingocode.cn/download/Lingo编程-1.0.0 Setup.exe", "_self")}
          }>
              <GetAppIcon className="mr-2"/> 下载客户端
           </Button>
        </div>
      ) : (
          <>
          <div className='w-24 h-6 absolute text-center' style={{ left: '50%',transform:'translateX(-50%)' }}>
            <div className='w-full flex'>
              <img src={logo1} className="h-8 w-8 self-center" alt=""/>
              <img src={logo} className='w-full h-full' />
            </div>
          </div>
            <Toolbar variant="dense" className="w-full" onClick={() => setOpenDrawer(true)}>
              <IconButton>
                <MenuIcon style={{ color: props.textColor, opacity: 0.5 }} />
              </IconButton>
            </Toolbar>
            {!isMobile && <Button className="fixed text-sm invisible" style={{ bottom:'10px'}} variant="contained" color="primary" size="small" onClick={
              ()=>{window.open("https://www.lingocode.cn/download/Lingo编程-1.0.0 Setup.exe ", "_self")}
            }>
              <GetAppIcon className="mr-2"/> 下载客户端
           </Button>}
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
              <List style={{ width: 200, minHeight: "100%", background: "#276cad", color: 'white' }}>
                {labels.map((label, i) => (
                  <ListItem key={i} button onClick={() => drawerScrollPage(i)}>
                    {label}
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        )}
    </AppBar>
  )
}

export default AppBarNav