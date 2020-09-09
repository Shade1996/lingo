import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup/RadioGroup'
import { Radio } from '@material-ui/icons'
import React from 'react'
//@ts-ignore
import bgSrc from "../assets/bg.jpg"
const ChildList = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');

    return(
        <div className="w-screen h-16 flex items-center my-4">
            <img src={bgSrc} alt="" className="h-16 w-16 rounded-full"/>
            <div className="ml-6 ">
                Shade
            </div>
        </div>
    )
}

export default ChildList