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
    console.log('typeof result in tmdb ? ', results)
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
    
    const {data: {results}} = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
            api_key: API_TOKEN,
            language: 'fr-FR',
            query: 'harry',
            // page: page
        },
    })

    console.log('what type in tmdb?: ', results)

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