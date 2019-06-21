import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilmList from './components/FilmList.js';

let testTableau = [{id: 1, title: 'test', releaseYear: 'test', synopsis: 'test', poster: ''},
{id: 2, title: 'test', releaseYear: 'test', synopsis: 'test', poster: ''},
{id: 3, title: 'test', releaseYear: 'test', synopsis: 'test', poster: ''},
{id: 4, title: 'test', releaseYear: 'test', synopsis: 'test', poster: ''},
{id: 5, title: 'test', releaseYear: 'test', synopsis: 'test', poster: ''}]

function App() {
  return (
    <div className="App">
      <FilmList items={testTableau}></FilmList>
    </div>
  );
}

export default App;
