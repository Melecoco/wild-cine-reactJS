import axios from 'axios'
import { API_TOKEN } from "./TMDB_key.js"

export async function getFilmsFromApiWithSearchedText(text) {

    const { data: { results } } = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
            api_key: API_TOKEN,
            language: 'fr-FR',
            query: text,
        }
    })
    return results.map(tmdbMovie => {
        return {
            id: tmdbMovie.id,
            title: tmdbMovie.title,
            synopsis: tmdbMovie.overview,
            poster: tmdbMovie.poster_path,
            releaseYear: tmdbMovie.release_date
        }
    })
}

export async function getMostPopularFilms() {
    
    const {data: {results}} = await axios.get('https://api.themoviedb.org/3/discover/movie', {
        params: {
            api_key: API_TOKEN,
            language: 'fr-FR',
        },
    })

    return results.map(tmdbMovie => {
        return {
            id: tmdbMovie.id,
            title: tmdbMovie.title,
            synopsis: tmdbMovie.overview,
            poster: tmdbMovie.poster_path,
            releaseYear: tmdbMovie.release_date
        }
    })
}

export function getPosterFromApi(name) {
    return `https://image.tmdb.org/t/p/w300${name}`
}

export function getBackdropFromApi(name) {
    return `https://image.tmdb.org/t/p/original${name}`
}

export async function getFilmDetailFromApi (id) {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}&language=fr`);

    return data;
}