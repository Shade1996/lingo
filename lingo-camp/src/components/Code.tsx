import React from 'react'
import { Input } from 'antd';
import { showKeyboard } from '../state';

export default function Code() {
    const { TextArea } = Input;
    return (
        <div className="" onClick={() => showKeyboard.value = true}>
            <TextArea rows={4} />
        </div>
    )
}
