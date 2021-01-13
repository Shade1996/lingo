import React, { useState } from 'react'
import { Menu } from 'antd'
import 'antd/dist/antd.css'

export default function LingoMenu() {
    const [current, setCurrent] = useState("mail")

    const handleClick = e => {
        console.log('click ', e)
        setCurrent(e.key)
    }

    return (
        <div className="sticky inset-x-0 top-0 bg-gray-800 p-1 text-gray-100 px-4  flex justify-between">
            <div className="text-2xl">
                LingoCodeCamp
            </div>
            <button type="button" className="border py-1 px-2 rounded-lg">
                Menu
            </button>
        </div>
        // <div>
        //     <Menu mode="horizontal" selectedKeys={[current]} onClick={handleClick} >
        //         <Menu.Item key="mail" >
        //         Navigation One
        //         </Menu.Item>
        //         <Menu.Item key="app" >
        //         Navigation Two
        //         </Menu.Item>
        //     </ Menu>
        // </div>
    )
}
