import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilmList from './components/FilmList.js';

let testTableau = [{id: 1, title: 'test', releaseYear: 'test', synopsis: 'test', poster: ''},
{id: 2, title: 'Harry', releaseYear: 'test', synopsis: 'test', poster: ''},
{id: 3, title: 'Potter', releaseYear: 'test', synopsis: 'test', poster: ''},
{id: 4, title: 'Star', releaseYear: 'test', synopsis: 'test', poster: ''},
{id: 5, title: 'WARs', releaseYear: 'test', synopsis: 'test', poster: ''},
{id: 6, title: 'héhé', releaseYear: 'test', synopsis: 'test', poster: ''},
{id: 7, title: 'eze', releaseYear: 'test', synopsis: 'test', poster: ''},
{id: 8, title: 'bonjour', releaseYear: 'test', synopsis: 'test', poster: ''},
{id: 9, title: 'grand-pere', releaseYear: 'test', synopsis: 'test', poster: ''},
{id: 10, title: 'ohoh pere noel', releaseYear: 'test', synopsis: 'test', poster: ''},
{id: 11, title: '?????', releaseYear: 'test', synopsis: 'test', poster: ''},
{id: 12, title: 'Nihao', releaseYear: 'test', synopsis: 'test', poster: ''},
{id: 13, title: 'XaiXien', releaseYear: 'test', synopsis: 'test', poster: ''}]

function App() {
  return (
    <div className="App">
      <FilmList items={testTableau}></FilmList>
    </div>
  );
}

export default App;
