import React, { Component } from 'react'
import MovieCardsCreator from './MovieCardsCreator';

export default class FilmList extends Component {

    static defaultProps = {
        items: []
    }

    cardCreation() {
        const {items} = this.props
        return (items.map( item => (
            
            <MovieCardsCreator 
                id={item.id}
                className='card'
                title={item.title}
                releaseYear={item.releaseYear}
                synopsis={item.synopsis}
                poster= {item.poster} 
                ></MovieCardsCreator>
        )))

    }

    render(){
        return(<div>
            {this.cardCreation()}
        </div>)
    }
}