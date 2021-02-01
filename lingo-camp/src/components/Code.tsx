import React from 'react'
import { Input } from 'antd';
import { showKeyboard } from '../state';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

import {UnControlled as CodeMirror} from 'react-codemirror2';


export default function Code({ code }) {
    // const { TextArea } = Input;
    return (
        <div onClick={() => showKeyboard.value = true}>
            <CodeMirror
             className="pointer-events-none"
             value={code}
             options={{
                 mode: 'xml',
                 theme: 'material',
                 lineNumbers: true
             }}
            />
        </div>
        
    )
}
