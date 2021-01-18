import React from 'react'

const Key: React.FC<{ text: string, onKey?: (key: string) => void }> = ({ text, onKey }) => {
    return (
        <div className="w-8 h-8 bg-gray-700 text-white text-center leading-8 rounded-lg" onClick={() => onKey?.(text)}>
            {text}
        </div>
    )
}
export default Key