const fs = require("fs")
const path = require("path")

const location = path.resolve("./Basic JavaScript")
const dir = fs.readdirSync(location)

for (const fileName of dir) {
	try {
		const data = fs.readFileSync(path.join(location, fileName), "utf8")
		if (data.split("------").length > 2)
			console.log(fileName)
	}
	catch {}
}