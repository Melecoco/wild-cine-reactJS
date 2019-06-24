import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import {DetailMovieView} from "./views/DetailMovieView";
import {PopularMoviesView} from "./views/PopularMoviesView";

function App() {

  return (
      <div>
        <Router>
            <Route
                path="/"
                exact
                component={PopularMoviesView}
            />
            {/* <Route
                path="/:nav"
                exact
                component={MoviesView}
            /> */}

            <Route
                path="/movies/:movieId"
                exact
                component={DetailMovieView}
            /> 
        </Router>
      </div>
  );
}

export default App;


