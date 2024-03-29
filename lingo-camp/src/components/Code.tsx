import React from 'react'
import { Input } from 'antd';
import { code, showKeyboard, test } from '../state';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

import {UnControlled as CodeMirror} from 'react-codemirror2';
import { useProxy } from 'valtio';


export default function Code() {
    useProxy(code)

    return (
        // <div onClick={() => showKeyboard.value = true}>
            <CodeMirror
             value={code.value}
             onChange={(e, _, value) => test.currentCode = value}
             options={{
                 mode: 'xml',
                 theme: 'material',
                 lineNumbers: true
             }}
            />
        // </div>
        
    )
}
