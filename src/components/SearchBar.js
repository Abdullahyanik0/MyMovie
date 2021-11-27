import React from 'react'
import { Link } from "react-router-dom"
class SearchBar extends React.Component {


    handleFormSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5" >
                    <div className="col-10">
                        <input onChange={this.props.searchMovieProp}
                            type="text" className="form-control"
                            placeholder="Search a movie">
                        </input>
                    </div>
                </div>
                <div className="col-2">
                    <Link to="/Addmovie">
                        <button type="button"
                            className="btn btn-md btn-danger"
                                >Add Movie
                        </button>
                    </Link>
                </div>

            </form>
        )
    }
}

export default SearchBar
