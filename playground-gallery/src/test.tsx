import "tailwindcss/base.css"
import "tailwindcss/components.css"
import "tailwindcss/utilities.css"
import React from "react"
import ReactDOM from "react-dom"
import MediaCard from './MediaCard'

const App = ()=>{

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
ReactDOM.render(<App />, document.querySelector("#app"))
// module.hot?.accept()yarn add @material-ui/core