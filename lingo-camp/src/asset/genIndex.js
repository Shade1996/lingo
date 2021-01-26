const fs = require("fs")
const path = require("path")

const location = path.resolve("./Basic JavaScript")
const dir = fs.readdirSync(location)

const result = { files: [] }

for (const fileName of dir) {
	if (fileName === "others") {
		for (const fileNameInOthers of fs.readdirSync(path.join(location, "others"))) {
			result.files.push(path.join("others", fileNameInOthers))
		}
	}
	else {
		result.files.push(fileName)
	}
}

result.files.sort((a, b) => parseFloat(a.split(".")[0]) - parseFloat(b.split(".")[0]))

// const str = JSON.stringify(result)

// const obj = JSON.parse(str)

fs.writeFileSync("./index.json", JSON.stringify(result), "utf8")

console.log("done")