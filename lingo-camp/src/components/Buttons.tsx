import { Button } from 'antd'
import React from 'react'
import { proxy } from 'valtio'
import { code, completedArray, markdownSrc, test } from '../state'
import { files } from '../utils/baseURL'
import formatTitle from '../utils/formatTitle'
import { pushOne } from '../utils/pushOne'
import ConfirmModal from './ConfirmModal'


export default function Buttons() {
    return (
        <div className="mt-4 inset-x-0 bottom-0 space-y-2">
            <ConfirmModal  />
            <Button className="w-full" onClick={()=>{
                code.value = ""
            }}>
                Reset
            </Button>
        </div>
    )
}