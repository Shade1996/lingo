import React, { useState } from 'react'
//@ts-ignore
import chartSrc from "../../assets/chart2.jpg"
import CloseIcon from '@material-ui/icons/Close';

const LevelModal: React.FC<{ onCloseModal: () => void }> = (props) =>{
    return (
        <div className="flex w-screen md:h-screen md:items-center justify-center p-6">
            <div className="flex flex-wrap w-full md:w-10/12 place-items-center  bg-white p-8 rounded-lg bg-blur">
                {props.children}
                <div className="absolute top-0 right-0 m-2 cursor-pointer" onClick={props.onCloseModal}><CloseIcon fontSize="large"/></div>
            </div>
        </div>
    )
}
export default LevelModal