import Server from "@lincode/server"
import * as path from "path"

const server = new Server({ static: path.resolve("./public") })
server.start(80)