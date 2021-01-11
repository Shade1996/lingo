import React, { useEffect, useState } from 'react'
import Key from './Key'

const lineSymbol = ["{","}","[","]","(",")",",",".","/",";","\"","'","<",">","+","-","*","%","=","!","|","&","?","\\",":","`","@","#","$","^","_"]
console.log(lineSymbol)
const lineNum = ["1","2","3","4","5","6","7","8","9","0"]

const line0Lower = ["q","w","e","r","t","y","u","i","o","p"]
const line0Upper = line0Lower.map(char => char.toUpperCase())

const line1Lower = ["a","s","d","f","g","h","j","k","l"]
const line1Upper = line1Lower.map(char => char.toUpperCase())

const line2Lower = ["z","x","c","v","b","n","m"]
const line2Upper = line2Lower.map(char => char.toUpperCase())

export default function Keys() {
    const [upperCase, setUpperCase] = useState(false)

    const [line0, setLine0] = useState(line0Lower)
    const [line1, setLine1] = useState(line1Lower)
    const [line2, setLine2] = useState(line2Lower)

    useEffect(() => {
        if (upperCase) {
            setLine0(line0Upper)
            setLine1(line1Upper)
            setLine2(line2Upper)
        }
        else {
            setLine0(line0Lower)
            setLine1(line1Lower)
            setLine2(line2Lower)
        }
    }, [upperCase])

    return (
        <div className="w-screen fixed bottom-0 flex-col items-center space-y-4 bg-gray-800 py-2 px-2">
            
            <div className="flex space-x-2 text-white overflow-x-scroll pb-2">
                {lineSymbol.map((p,i) => (
                    <div className="px-3 text-center hover:bg-yellow-400 rounded-lg" key={i}>{p}</div>
                ))}
            </div>
            <div className="flex justify-center space-x-2">
                {lineNum.map((p,i) => (
                    <Key text={p} key={i} />
                ))}
            </div>
            <div className="flex justify-center space-x-2 ">
                {line0.map((p,i) => {
                    return <Key text={p} key={i}/>
                })}
            </div>
            <div className="flex justify-center space-x-2 ">
                {line1.map((p,i) => {
                    return <Key text={p} key={i} />
                })}
            </div>
            <div className="flex justify-center space-x-2 ">
                <div className="w-6 h-8  bg-gray-700 leading-8 text-white text-center rounded-lg" onClick={() => setUpperCase(!upperCase)}>
                    s
                </div>
                {line2.map((p,i) => {
                    return <Key text={p} key={i} />
                })}
            </div>
            <div className="flex justify-center space-x-2 text-white pt-1 pb-4">
                <div className="flex-1 bg-gray-700 text-center rounded-lg">Tab</div>
                <div className="flex-1 bg-gray-700 text-center rounded-lg">Space</div>
                <div className="flex-1 bg-gray-700 text-center rounded-lg">Enter</div>
            </div>
        </div>
    )
}