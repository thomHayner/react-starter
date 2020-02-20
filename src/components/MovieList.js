import React from 'react';
import MovieListItem from './MovieListItem.js';

let MovieList = (props) => (
    <div className='movie-list'>
        {props.movies.map((movie, i) => (<MovieListItem movie={movie} key={i} />))}
    </div>
);

export default MovieList