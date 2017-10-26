import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {}

  componentWillMount() {}

  componentDidMount() {
      fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating');
  }

  _renderMovie = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovie() : 'Loading...'}
      </div>
    );
  }
}

export default App;
