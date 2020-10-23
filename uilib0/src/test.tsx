import { Button, Text, View, Box, Checkbox, Radio, Select, MenuItem, ButtonGroup, Screen } from "."
import setAutoMountRoot from "./setAutoMountRoot"

setAutoMountRoot("#app")

const screen = new Screen()
screen.backgroundColor = "yellow"

const button = new Button("open new screen")
screen.append(button)
button.centerX = true
button.centerY = true

button.onClick = () => {
    const screen = new Screen()
    screen.backgroundColor = "blue"

    const button = new Button("back")
    screen.append(button)
    button.centerX = true
    button.centerY = true
    button.onClick = () => {
        screen.remove()
    }
}