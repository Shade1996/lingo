import React from 'react'
import { Input } from 'antd';
import { showKeyboard } from '../state';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

import {UnControlled as CodeMirror} from 'react-codemirror2';


export default function Code() {
    // const { TextArea } = Input;
    const value = ""
    return (
        // <div className="" onClick={() => showKeyboard.value = true}>
        //     <TextArea rows={4} />
        // </div>
        <div onClick={() => showKeyboard.value = true}>
            <CodeMirror
             className="pointer-events-none"
             value={value}
             options={{
                 mode: 'xml',
                 theme: 'material',
                 lineNumbers: true
             }}
             onChange={(editor, data, value) => {
                 console.log(value)
             }}
            />
        </div>
        
    )
}
