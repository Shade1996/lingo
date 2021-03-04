import React from "react"
import MediaCard from './MediaCard'

export default ()=>{
    return (
           <div className="container mx-auto my-12 px-4 md:px-12">
               <div className="flex justify-center flex-wrap -mx-1 lg:-mx-4 gap-4 ">
                    {[1,1,1,1,1,1,1,1,1].map((a,i) => (
                        <MediaCard  key={i} />
                    ))}   
               </div>
           </div>
        )
        
}