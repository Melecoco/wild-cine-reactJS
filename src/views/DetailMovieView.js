import React, {Component} from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {getBackdropFromApi, getFilmDetailFromApi, getPosterFromApi} from "./../API/TMDB";
import './viewsCss/DetailMovieView.css'


// import "../Helpers/App.css"


export class DetailMovieView extends Component {

    state = {
        title: null,
        genres: [],
        overview: null,
        poster_path: null,
        production_companies: [],
        release_date: null
    }

    componentDidMount() {
        this.getFilm(this.props.match.params.movieId);
    }

    async getFilm(id) {
        const response = await getFilmDetailFromApi(id);

        this.setState(response);
        return response;

    }

    render(){
        const { title, genres, overview, poster_path, production_companies, release_date, backdrop_path } = this.state;
        return(
        <div className="App">
            {/* <div>
                <img src={getBackdropFromApi(backdrop_path)}/>
            </div> */}
            <h1>{title}</h1>
            <div>
                {genres.map((genre, key) => 
                    {
                        return`${genre.name} `
                    })
                }
            </div>            
            <div>
                <p>{overview}</p>
            </div>
            <div>
                <img src={getPosterFromApi(poster_path)}/>
            </div>
            <div>
                <h2>
                    produced by: 
                    {production_companies.map((companie) =>
                    {
                        return `${companie.name}`
                    })}
                </h2>
                <h2>released in {release_date}</h2>
                
            </div>
            
            
        </div>
        )
    }
}