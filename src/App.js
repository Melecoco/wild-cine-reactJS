import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FilmList from './components/FilmList.js';
import Searcher from './components/Searcher'
import {getMostPopularFilms} from './API/TMDB'

class App extends Component {

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
  

export default App;
