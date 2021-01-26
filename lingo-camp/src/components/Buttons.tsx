import { Button } from 'antd'
import React from 'react'

export default function Buttons() {
    return (
        <div className="mt-4 inset-x-0 bottom-0 space-y-2">
            <Button className="w-full" type="primary">
                Test
            </Button>
            <Button className="w-full">
                Reset
            </Button>
        </div>
    )
}
