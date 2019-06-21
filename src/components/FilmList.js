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
        return(<div>
            {this.displayCard()}
        </div>)
    }
}