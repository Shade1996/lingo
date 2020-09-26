import React from "react"

//@ts-ignore
import img1 from '../../assets/support-oxfo.png'
//@ts-ignore
import img2 from '../../assets/support-innovate.png'
//@ts-ignore
import img3 from '../../assets/support-oui.png'
//@ts-ignore
import img5 from '../../assets/intel-footer-logo.svg'
//@ts-ignore
import img7 from '../../assets/wowkids.png'

const Support =()=>{

    return(
        <div className="w-full h-full bg-blur" style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(10,93,91,1))"
        }}>
            <div className="container w-full mx-auto p-6">
                <p className="text-2xl font-semibold">合作学校和伙伴</p>
                <div className="grid grid-cols-1 pt-12 gap-0">
                    <div className="w-64 py-12 justify-self-center">
                        <a href="http://www.wowkids.net/makerclub.html" target="_blank">
                            <img src={img7} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 py-12 gap-4">
                    <div className="flex w-full flex-wrap justify-around items-center">
                        <div className="w-64 py-12"><img src={img1} alt=""/></div>
                        <div className="w-64 py-12"><img src={img2} alt=""/></div>
                        <div className="w-64 py-12"><img src={img3} alt=""/></div>
                        {/* <div className="w-64 py-12"><img src={img5} alt=""/></div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Support