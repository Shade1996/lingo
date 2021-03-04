import { Card, CardActions } from '@material-ui/core'
import React from 'react'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

export default function SoundCards() {
    return (
        <Card className="w-5/12 h-40 flex items-center px-4">
            <div>
                <PlayCircleOutlineIcon fontSize="large"/>
            </div>
            <div className="ml-6">
                props
            </div>
        </Card>
    )
}
