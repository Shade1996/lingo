import React from 'react'

export default function Key({ text, onClick = null }) {
    
    return (
        <div className="w-8 h-8 bg-gray-700 text-white text-center leading-8 rounded-lg" onClick={onClick}>
            {text}
        </div>
    )
}