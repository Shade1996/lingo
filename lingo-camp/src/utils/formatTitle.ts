import formatOthers from "./formatOthers"
import stripNumberFromTitle from "./stripNumberFromTitle"

export default (item: string) => {
    const parts = item.split("/")
    parts.shift()
    parts.shift()
    parts.shift()
    const result = parts.join("/")
    return formatOthers(stripNumberFromTitle(result))
}