import formatOthers from "./formatOthers"
import stripNumberFromTitle from "./stripNumberFromTitle"

export default (item: string) => {
    let result: string = '';
    if(item.includes('others')){
        const parts = item.split("others/")
        
        result = parts.pop().split(".").shift()
    }else{
        const parts = item.split(" ")
        parts.shift()
        parts.shift()
        result = parts.join(" ").split(".").shift()
    }
    return formatOthers(stripNumberFromTitle(result))
}