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
        release_date: null,
        backGroundColor: 'lightseagreen',
        borderColor: 'lightseagreen',
        colorError: '',
    }

    componentDidMount() {
        this.getFilm(this.props.match.params.movieId);
        console.log('hey')
    }

    async getFilm(id) {
        const response = await getFilmDetailFromApi(id);
        this.setState(response);
        return response;

    }
   
    handleChangeColor(e){
        
        this.setState({
            backGroundColor: e.target.value,
            borderColor: e.target.value
        }, function(){
            this.validateColor()
        })       
    }
    validateColor(){
        const {backgroundColor, borderColor} = this.state
        if(backgroundColor || borderColor === 'lightseagreen' || 'lightcoral' || 'lightgreen'){
            this.setState({ colorError: "color can't be something else" });
        }
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
                    <div className='detail-container titre' 
                    style={{backgroundColor: `${this.state.backGroundColor}`,
                    borderColor: `${this.state.borderColor}`}}>
                        <h6>TITRE</h6>
                        <h1>{this.isDataEmpty(title)}</h1>
                    </div>
                    
                    <div  className='detail-container genre' style={{borderColor: `${this.state.borderColor}`}}>
                        <h6>GENRE</h6>
                        <h1>
                            {genres.map((genre, key) => 
                                {
                                    return`${genre.name} `
                                })
                            }
                        </h1>
                    </div>

                    <div className='detail-container producers' style={{borderColor: `${this.state.borderColor}`}}>
                        <h6>PRODUCTION</h6>
                        <h1> 
                            {production_companies.map((companie) =>
                            {
                                return `${companie.name}`
                            })}
                        </h1>
                    </div>
                    <div className='detail-container releaseYear' style={{borderColor: `${this.state.borderColor}`}}>
                            
                            <h6>RELEASED YEAR</h6>
                            <h1>
                            {this.isDataEmpty(release_date)}
                            </h1>
                    </div>
                    <div className='detail-container synopsis' style={{borderColor: `${this.state.borderColor}`}}>
                        <h6>SYNOPSIS</h6>
                        <div>{this.isDataEmpty(overview)}</div>
                    </div>
                    
                </div>

                <div className='poster' style={{backgroundColor: `${this.state.backGroundColor}`, 
                borderColor: `${this.state.borderColor}`}}>
                    <div>
                        <h5>Change color for fun</h5>
                        <select onChange={(e)=>this.handleChangeColor(e)}>
                        <option value="lightseagreen">bleu turquoise</option>
                        <option value="lightcoral">rose corail</option>
                        <option value="lightgreen">vert pelouse</option>
                    </select>
                    </div>
                    
                    <img src={getPosterFromApi(poster_path)}/>
                </div>
            </main>
            
            

            
            
            
            
        </div>
        )
    }
}