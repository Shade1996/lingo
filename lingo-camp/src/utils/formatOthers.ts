export default (str: string, remove?: boolean) => {
    if (str.startsWith("others/")) {
        if (remove)
            return str.replace("others/", "")
        else
            return str.replace("others/", "(optional) ")
    }
    else
        return str
}