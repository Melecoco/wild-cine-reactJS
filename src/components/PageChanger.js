import React, {Component} from 'react'
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


export default class PageChanger extends Component{
    

    // static defaultProps = {
    //     getNextPage:1
    // }
    state = {
        getNextPage: 1
    }

    
    onClick(){
        this.state.getNextPage = parseInt(this.props.page) + 1
    }
    render(){
        console.log('this.state.getNextPage ', this.state.getNextPage)
        const {nextPage} = this.state.getNextPage
        return (
            <button nextpage={nextPage} truc={(e)=>{this.onClick(e)}}>Aller à la page {nextPage}</button>
        )
    }
    
    
}