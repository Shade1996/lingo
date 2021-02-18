export default (item: string) => {
    const parts = item.split(".")
    const isNum = !Number.isNaN(parseFloat(parts[0]))
    if (isNum) {
        if (parts.length <=2)
            throw new Error("incorrect title format: " + item)

        parts.shift()
        parts.pop()
        return parts.join(".")
    }
    else return item
}