import React, {Component} from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {getBackdropFromApi, getFilmDetailFromApi, getImageFromApi} from "../API/TMDB";


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
        return(<div>vide</div>)
    }
}