import React from 'react';

let AddMovie = (props) => (
    <form className='add-movie-form' >
        <input className='add-movie-input' onChange={props.onChange} ></input>
        <button id='add-movie-button' onClick={props.onClick} >Add Movie</button>
    </form>
)

export default AddMovie