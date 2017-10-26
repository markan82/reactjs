import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {}

  componentWillMount() {}

  componentDidMount() {
      this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    //console.log(movies);
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
  }

  _renderMovie = () => {
    const movies = this.state.movies.map((movie, index) => {
      return (<Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres} 
        synopsis={movie.synopsis} />)
    })
    return movies;
  }

  render() {
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App-loading"}>
        {this.state.movies ? this._renderMovie() : 'Loading...'}
      </div>
    );
  }
}

export default App;
