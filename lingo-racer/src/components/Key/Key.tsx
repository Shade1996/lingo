import React from 'react'

export default function Key(props) {
    
    const {size, text} = props

    return (
        <div className="w-6 h-6 bg-yellow-400 text-center leading-6 rounded-xl">
            {props.text}
        </div>
    )
}
