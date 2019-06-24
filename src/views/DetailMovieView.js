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
   
    

    isDataEmpty(data){
        if(data == ''){            
            return "nothing to display"
        }
        else{
            return data
        }
    }

    render(){
        const { title, genres, overview, poster_path, production_companies, release_date, backdrop_path } = this.state;
        return(
        <div className="App">
            {/* <div>
                <img src={getBackdropFromApi(backdrop_path)}/>
            </div> */}
            <main className='main'>
                <div className='detail-infos'>
                    <div className='detail-container titre'>
                        <h6>TITRE</h6>
                        <h1>{this.isDataEmpty(title)}</h1>
                    </div>
                    
                    <div  className='detail-container genre'>
                        <h6>GENRE</h6>
                        <h1>
                            {genres.map((genre, key) => 
                                {
                                    return`${genre.name} `
                                })
                            }
                        </h1>
                    </div>

                    <div className='detail-container producers'>
                        <h6>PRODUCTION</h6>
                        <h1> 
                            {production_companies.map((companie) =>
                            {
                                return `${companie.name}`
                            })}
                        </h1>
                    </div>
                    <div className='detail-container releaseYear'>
                            
                            <h6>RELEASED YEAR</h6>
                            <h1>
                            {this.isDataEmpty(release_date)}
                            </h1>
                    </div>
                    <div className='detail-container synopsis'>
                        <h6>SYNOPSIS</h6>
                        <div>{this.isDataEmpty(overview)}</div>
                    </div>
                    
                </div>

                <div className='poster'>
                    <img src={getPosterFromApi(poster_path)}/>
                </div>
            </main>
            
            

            
            
            
            
        </div>
        )
    }
}