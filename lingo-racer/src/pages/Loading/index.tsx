import React from 'react'
//@ts-ignore
import LoadingSrc from '../../../assets/loading.gif'
export default function Loading() {
    return (
        <div className="w-screen h-screen bg-center bg-cover absolute top-0" style={{
            backgroundImage:`url(${LoadingSrc})`
        }}>
            
        </div>
    )
}
