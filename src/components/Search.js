import React from 'react';

let Search = (props) => (
    <form className='search-form' >
        <input className='search-input' onChange={props.onChange} ></input>
        <button id='search-button' onClick={props.onClick} >Search</button>
    </form>
) 

export default Search;