import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {

    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h5>{this.props.title}</h5>
            </div>
        )
    }
}

function MoviePoster({poster}) {
    return (
        <img src={poster} alt='Movie Poster' />
    )
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired
}

export default Movie;