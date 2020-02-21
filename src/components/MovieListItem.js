import React from 'react';

let MovieListItem = (props) => (
    <div className='movie-list-item'>
        <div className='movie-list-item-title' >{props.movie.title}</div>
        <button className='movie-list-item-watched' /*watched={props.movie.watched}*/ >watched</button>
    </div>
);


export default MovieListItem