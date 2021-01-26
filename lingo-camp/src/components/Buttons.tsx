import { Button } from 'antd'
import React from 'react'
import { completedArray, markdownSrc } from '../state'
import formatTitle from '../utils/formatTitle'
import { pushOne } from '../utils/pushOne'

export default function Buttons() {
    return (
        <div className="mt-4 inset-x-0 bottom-0 space-y-2">
            <Button className="w-full" type="primary" onClick={()=>{
                pushOne(completedArray, markdownSrc.value.replace("/asset/Basic JavaScript/", ""))
            }}>
                Test
            </Button>
            <Button className="w-full">
                Reset
            </Button>
        </div>
    )
}