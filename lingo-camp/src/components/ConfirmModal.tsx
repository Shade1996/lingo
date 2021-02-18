import { Modal, Button } from 'antd';
import React, { useEffect } from 'react'
import { code, completedArray, indexData, markdownSrc, page, test } from '../state';
import { files } from '../utils/baseURL';
import { pushOne } from '../utils/pushOne';
import dedent from "ts-dedent"

const successModal = (title: string, content: string) => {
    const modal = Modal.success({ title, content })
    setTimeout(() => {
        modal.destroy()

        const mdSrcNoURL = markdownSrc.value.split(files)[1]
        const mdIndex = Object.values(indexData.value).indexOf(mdSrcNoURL)
        markdownSrc.value = files + indexData.value[mdIndex+1]
        
    }, 1500)  
}

const errorModal = (title:string, content:string) =>{
    const modal = Modal.error({ title, content })
}

export default function ConfirmModal() {
    return (
        <Button className="w-full" type="primary" onClick={() =>{
            // try {
                let correct = false
                if (test.normalTest) {
                    correct = eval(test.currentCode + test.normalTest)
                }
                if (correct && test.stringTest){
                    correct = false

                    const testCode = "const code = " + '`' + test.currentCode + '`\n' + test.stringTest

                    console.log(testCode)

                    correct = eval(testCode)
                }
                    
                if (correct) {
                    // 添加到已经做完的数组里，这样主页上的题目就会被杠掉
                    pushOne(completedArray.value, markdownSrc.value.replace(files, ""))
                    successModal("Success", "Next item will show in 2s")
                    code.value =""
                }
                else if(code.value ==="") {
                    successModal("Success", "Next item will show in 2s")
                }
                else {
                    errorModal("error", "Try again")
                }
            // } catch (error) {
            //     errorModal("error", "Try again")
            // }
            
        }}>
            Test
        </Button>
    )
}