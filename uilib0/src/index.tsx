import "../assets/style.css"
import { wrap } from "react-imperative"
import { Button as MDButton, ButtonGroup as MDButtonGroup, Checkbox as MDCheckbox, Radio as MDRadio, Select as MDSelect, MenuItem as MDMenuItem, Switch as MDSwitch, Tab as MDTab } from "@material-ui/core"
import { Screen as ReactScreen } from "react-screens"

const propNames = ["onClick", "onMouseDown", "onMouseUp", "className", "style", "id"] as const

const styleNames = [
    "border",
    "borderWidth",
    "borderBottomWidth",
    "borderLeftWidth",
    "borderRightWidth",
    "borderRadius",
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
    "borderColor",
    "borderLeftColor",
    "borderRightColor",
    "borderTopColor",
    "borderBottomColor",
    "borderStyle",
    "opacity",
    "overflow",
    "display",
    "flex",
    "flexDirection",
    "flexWrap",
    "justifyContent",
    "alignContent",
    "alignItems",
    "alignSelf",
    "margin",
    "marginBottom",
    "marginLeft",
    "marginRight",
    "marginTop",
    "height",
    "width",
    "maxHeight",
    "maxWidth",
    "minHeight",
    "minWidth",
    "padding",
    "paddingBottom",
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "position",
    "top",
    "bottom",
    "left",
    "right",
    "backgroundColor",
    "color",
    "fontFamily",
    "fontSize",
    "fontStyle",
    "fontWeight",
    "lineHeight",
    "textAlign"
] as const

export const View = wrap("div", { propNames, styleNames, defaultProps: { style: { position: "relative" }}})

export const Box = wrap("div", { propNames, styleNames, defaultProps: { style: {
    position: "relative",
    float: "left",
    clear: "both",
    padding: "2.5rem"
}}})

export const Text = wrap("div", { propNames, styleNames, defaultProps: { style: { position: "relative" }}})

export const Screen = wrap(ReactScreen, { styleNames, propNames: [
    "transitionDirection",
    ...propNames
]})

export const Button = wrap(MDButton, { styleNames, propNames: [
    "color",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "disableRipple",
    "endIcon",
    "fullWidth",
    "href",
    "size",
    "startIcon",
    "variant",
    ...propNames   
]})

export const ButtonGroup = wrap(MDButtonGroup, { styleNames, propNames: [
    "color",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "disableRipple",
    "fullWidth",
    "orientation",
    "size",
    "variant",
    ...propNames
]})

export const Checkbox = wrap(MDCheckbox, { styleNames, propNames: [
    "checked",
    "color",
    "disabled",
    "disableRipple",
    "indeterminate",
    "required",
    "onChange",
    "size",
    ...propNames
]})

export const Radio = wrap(MDRadio, { styleNames, propNames: [
    "checked",
    "color",
    "disabled",
    "disableRipple",
    "required",
    "onChange",
    "size",
    "name",
    ...propNames
]})

export const Select = wrap(MDSelect, { styleNames, propNames: [
    "autoWidth",
    "displayEmpty",
    "labelId",
    "labelWidth",
    "multiple",
    "onChange",
    "onClose",
    "onOpen",
    "variant",
    ...propNames  
]})

export const MenuItem = wrap(MDMenuItem, { styleNames, propNames: [
    "dense",
    ...propNames
]})

export const Switch = wrap(MDSwitch, { styleNames, propNames: [
    "checked",
    "color",
    "disabled",
    "disableRipple",
    "edge",
    "onChange",
    "required",
    "size",
    ...propNames  
]})

export const Tab = wrap(MDTab, { styleNames, propNames: [
    "disabled",
    "disableFocusRipple",
    "disableRipple",
    "wrapped",
    ...propNames  
]})