import React from 'react'
import SoundCards from './SoundCards'

export default function SoundGrid() {
    return (
        <div className="w-full flex flex-col space-y-10 mt-20 ml-10 ">
           {
               [1,1,1,1,1,1,1].map((a,i)=>(
                   <SoundCards key={i} />
               ))
           }
        </div>
    )
}
