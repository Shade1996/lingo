import React from 'react'
import Key from './Key'

const line0 = ["q","w","e","r","t","y","u","i","o","p"]
const line1 = ["a","s","d","f","g","h","j","k","l"]
const line2 = ["z","x","c","v","b","n","m"]

export default function Keys() {
    return (
        <div className="w-screen absolute bottom-0 mb-10 flex-col items-center">
            <div className="flex justify-center space-x-2">
                {line0.map((p,i) => {
                    return <Key text={p} key={i} size={false}/>
                })}
            </div>
            <div className="flex justify-center space-x-2 mt-4">
                {line1.map((p,i) => {
                    return <Key text={p} key={i} size={false}/>
                })}
            </div>
            <div className="flex justify-center space-x-2 mt-4">
                {line2.map((p,i) => {
                    return <Key text={p} key={i} size={false}/>
                })}
            </div>
           
        </div>
    )
}
