import Grow from "@material-ui/core/Grow"
import { TransitionProps } from "@material-ui/core/transitions"
import React, { forwardRef, Ref, ReactElement } from "react"

type Props = TransitionProps & { children?: ReactElement<unknown, any> }

const GrowTransition = forwardRef((props: Props, ref: Ref<unknown>) => <Grow ref={ref} {...props} />)
export default GrowTransition