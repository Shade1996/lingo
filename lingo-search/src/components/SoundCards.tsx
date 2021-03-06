import { Card, CardActions, Fab } from '@material-ui/core'
import React from 'react'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import GetAppIcon from '@material-ui/icons/GetApp';
import ShareIcon from '@material-ui/icons/Share';

export default function SoundCards() {
    return (
        <Card className="w-full p-6 rounded-xl">
            <div className="mb-4 text-lg opacity-75 ml-4">Hello World</div>
            <div className="flex items-center gap-4 flex-wrap">
                <audio controls />
                <div className="flex-grow" />
                <div className="flex gap-4">
                    <Fab variant="extended" size="medium" color="secondary" className="opacity-75">
                        <GetAppIcon className="mr-2" />
                        下载
                    </Fab>
                    <Fab variant="extended" size="medium" color="primary" className="bg-white bg-opacity-25 opacity-75">
                        <ShareIcon className="mr-2" />
                        分享
                    </Fab>
                </div>
            </div>
            {/* <div>
                <PlayCircleOutlineIcon fontSize="large"/>
            </div>
            <div className="ml-6">
                props
            </div> */}
        </Card>
    )
}
