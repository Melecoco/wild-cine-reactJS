import React from 'react';
//import {MovieDetailView} from "./Views/MovieDetailView";
import {PopularFilmsView} from "./views/PopularFilmsView";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {

  return (
      <div>
        <Router>
          <Switch>
          <Route
                path="/"
                exact
                component={PopularFilmsView}
                
            />
            <Route
                path="/popularFilms/:pageId"
                exact
                component={PopularFilmsView}
                
            />
          </Switch>
            
            {/* <Route
                path="/:nav"
                exact
                component={PopularFilmsView}
            /> */}
            {/* <Route
                path="/movies/:movieId"
                exact
                component={MovieDetailView}
            /> */}
        </Router>
      </div>
  );
}

export default App;

