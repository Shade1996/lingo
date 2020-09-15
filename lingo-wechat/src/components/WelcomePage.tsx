import React, { useState } from "react"
import Button from '@material-ui/core/Button'
//@ts-ignore
import bgSrc from "../assets/bg.mp4"
import { Dialog, Paper, TextField } from "@material-ui/core"
import { setCurrentPage } from "../state"

const WelcomePage = () => {
    // const [dialogOpen, setDialogOpen] = useState(false);
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
    const [currentPhone, setCurrentPhone] = useState("")
    const [error, setError] = useState("")

    return (
        <>
            <div className="w-full h-screen">
                <div className="flex justify-center h-screen">
                    <video src={bgSrc} autoPlay muted loop className="h-full object-cover" />
                    <div className="flex flex-col absolute  w-full h-screen flex-wrap items-center ">
                        <div className=" text-3xl top-0 font-bold mt-20 opacity-75 text-white">
                            欢迎来到 凌高编程
                        </div>
                        <div className=" text-white text-sm opacity-50 p-10">
                            每个孩子天生都充满创造力，他们的想象力与好奇心，会编绘出绚丽多彩的世界。LINGO希望将孩子的奇思妙想，通过编程自由表达出来并分享。以科技表达自我，将梦想编程现实，用想法改变世界。
                        </div>
                        <div className=" absolute bottom-0 mb-20 w-full">
                            <Button variant="contained" color="primary" onClick={() => setShowPhoneNumber(true)} fullWidth >
                                    点击进入
                                </Button>
                        </div>
                    </div>
                    {showPhoneNumber ? (
                        <div className="w-full h-full bg-blur absolute flex-col p-10">
                            <p className="text-4xl text-gray-400 mt-20 font-bold">绑定手机号</p>
                            <p className=" text-sm text-gray-400 opacity-50 mb-10">请输入正确的手机号，查看您孩子的作品</p>
                            <TextField error={!!error} helperText={error} label="请输入11位手机号" fullWidth onChange={e=>{
                                setCurrentPhone(e.target.value)
                                setError("")
                            }}/>
                            <div className="mt-16 flex justify-around">
                               <Button variant="outlined" color="primary">
                                获取验证码
                                </Button>
                                <Button variant="outlined" color="primary" onClick={()=>{
                                    if(!(/^1[3456789]\d{9}$/.test(currentPhone))){ 
                                        setError("手机号码有误，请重填")
                                        return false; 
                                    } else setCurrentPage("level")
                                }}>
                                下一步
                                </Button>
                            </div>
                        </div>
                    ) : undefined}
                </div>
            </div>
            {/* <Dialog onClose={() => setDialogOpen(false)} open={dialogOpen}>
                <div className="bg-white w-64 h-48">
                    <div className="flex mt-10 justify-center ml-8 mr-8 flex-wrap">
                        <p className="mb-10 text-black">若您已经购课，请使用购课微信进行登录哦！</p>
                        <Button variant="contained" color="primary" onClick={() => {
                            setShowPhoneNumber(true)
                            setDialogOpen(false)
                        }}>
                            微信登录
                        </Button>
                    </div>
                </div>
            </Dialog> */}
        </>
    )
}
export default WelcomePage