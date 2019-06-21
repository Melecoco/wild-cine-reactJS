import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        width: 300,
        margin: 5
    },
    media: {
        height: 200
    }
});


export default function MovieCardsCreator(props) {

    const classes = useStyles()
    const {title, poster} = props

    return (
        <Card className={classes.card} onClick={props.onClick}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={poster}
                    title={title}
                />
                <CardContent>                    
                    <Typography gutterBottom variant="h5" component="h2" style={{height: '102.39px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        {title}
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
    
    
}