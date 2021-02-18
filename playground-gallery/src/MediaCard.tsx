import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles } from '@material-ui/core'
import React from 'react'

export default function MediaCard() {
    return (
        <Card style={{ width: 320 }}>
            <CardActionArea>
                <CardMedia
                 className="h-64"
                 image="/static/images/cards/contemplative-reptile.jpg"
                 title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
            </CardActions>
        </Card>
    )
}
