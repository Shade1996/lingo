import { Button } from 'antd'
import React from 'react'
import { code, completedArray, markdownSrc } from '../state'
import { files } from '../utils/baseURL'
import formatTitle from '../utils/formatTitle'
import { pushOne } from '../utils/pushOne'
import ConfirmModal from './ConfirmModal'

// export const test = { value: "" }

export default function Buttons() {
    return (
        <div className="mt-4 inset-x-0 bottom-0 space-y-2">
            <ConfirmModal  />
            <Button className="w-full" onClick={()=>{
                let result = completedArray.value.filter(item => item !== markdownSrc.value.replace(files, ""))
                completedArray.value = result
            }}>
                Reset
            </Button>
        </div>
    )
}