import { Button } from 'antd'
import React from 'react'

//@ts-ignore
import testMdSrc from '../asset/test.md'
//@ts-ignore
import pageSrc from '../asset/page.md'
import { markdownSrc } from '../state'

const mdSrcArray = [testMdSrc, pageSrc]
let mdSrcIndex = 0

markdownSrc.value = mdSrcArray[0]

export default function Buttons() {
    return (
        <div className="mt-4 inset-x-0 bottom-0 space-y-2">
            <Button className="w-full" type="primary" onClick={() => {
                mdSrcIndex++
                markdownSrc.value = mdSrcArray[mdSrcIndex]
            }}>
                Test
            </Button>
            <Button className="w-full">
                Reset
            </Button>
        </div>
    )
}
