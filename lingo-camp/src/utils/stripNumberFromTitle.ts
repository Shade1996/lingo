export default (item: string) => {
    const parts = item.split(".")
    const isNum = !Number.isNaN(parseFloat(parts[0]))
    if (isNum) {
        parts.shift()
        parts.pop()
        return parts.join(".")
    }
    else return item
}