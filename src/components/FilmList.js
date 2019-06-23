import React, { Component } from 'react'
import MovieCardsCreator from './MovieCardsCreator';
import {getMostPopularFilms} from './../API/TMDB.js';
import {Link} from "react-router-dom";

export default class FilmList extends Component {

    static defaultProps = {
        items: []
    }



    cardCreation() {
        const {items} = this.props
        console.log('what type in cardCreation ? ', items)
        console.log('typeof items ', typeof items)


        return (items.map( item => (
            console.log('items is:', items),
            console.log('itemstype is:', typeof items),

            console.log(item),
            // <Link to={`/movies/${item.id}`} >
            <MovieCardsCreator 
                id={item.id}
                className='card'
                title={item.title}
                releaseYear={item.releaseYear}
                synopsis={item.synopsis}
                poster= {item.poster}
                ></MovieCardsCreator>
            //</Link>
        )))

    }
        
    displayCard() {
        let styleDiv = {
            display: 'flex',
            maxWidth: '4000',
            height: '35',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
        }
        return (
            <div style={styleDiv}>
                {this.cardCreation()}
            </div>
        )
    }

    render(){
        return(
            this.displayCard()
        )
    }
}