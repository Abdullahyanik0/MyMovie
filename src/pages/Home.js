import React from 'react'
import MovieList from '../components/MovieList'
import SearchBar from '../components/SearchBar'
import axios from 'axios'
import { Route, Routes } from "react-router-dom"
import AddMovie from './Addmovie'
class Home extends React.Component {

    state = {
        movies: [],
        searchQuery: ""
    }



    async componentDidMount() {
        const response = await axios.get("http://localhost:3002/movies");
        this.setState({ movies: response.data })

    }
    addMovie = async (movie) => {
        await axios.post(`http://localhost:3002/movies/`, movie)
        this.setState(state => ({
            movies: state.movies.concat([movie])
        }))
    }


    deleteMovie = async (movie) => {
        axios.delete(`http://localhost:3002/movies/${movie.id}`)
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
        this.setState(state => ({
            movies: newMovieList
        }))
    }


    searchMovie = (event) => {
        this.setState({ searchQuery: event.target.value })
    };


    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )
        return (
            <div className="container">
                <div className="row">
                    <div className="col-kg-12">
                        <SearchBar searchMovieProp={this.searchMovie} />
                    </div>
                </div>
                <MovieList
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie}
                />
                <Routes>
                    <Route path="/add" render={({ history }) => (

                        <AddMovie

                            onAddMovie={(movie) => {
                                this.addMovie(movie)
                                history.push("/")
                            }
                            }

                        />

                    )} />
                </Routes>
            </div>
        )
    }
}

export default Home
