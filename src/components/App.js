import React from 'react';
import MovieList from './MovieList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'MEGA ULTIMATE SUPER AWESOME ALL TIME BEST MOVIE LIST!!!!!!!',
      movieList: ['Die Hard', 'Die Hard 2', 'Die Hard, with a Vengence', 'Live Free or Die Hard', 'A Good Day to Die Hard']
    }
  }
  render(){
    return(
    <div className='main'>
      <h2 className='page-name'>{this.state.name}</h2>
      <MovieList movies={this.state.movieList} />
    </div>
  )}
}

export default App;