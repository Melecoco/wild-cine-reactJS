import React, { Component } from 'react'

import {getMostPopularFilms} from './../API/TMDB'
import Searcher from './../components/Searcher'
import FilmList from './../components/FilmList'

export class PopularMoviesView extends Component{

    state = { 
        list: []
    }

    getDataFilm = async () => {
        this.setState( {list : await getMostPopularFilms()})
    }

    sendToState(list){
        this.setState({list})
    }

    componentDidMount(){
        this.getDataFilm()
    }

    render(){
    return (
        <div className="App">
        <Searcher onComplete={this.sendToState.bind(this)}></Searcher>
        <FilmList items={this.state.list}></FilmList>
        </div>
    );
    }
}