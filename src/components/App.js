import React from 'react';
import '../main.css'
import MovieList from './MovieList.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';
import ExampleData from './ExampleData.js';
import NotAwesome from './NotAwesome.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'MEGA ULTIMATE SUPER AWESOME ALL TIME #1 BEST MOVIE EVER LIST, EVER!!!',
      movieList: ExampleData,
      visibleMovieList: ExampleData,
      searchFor: '',
      addTitle: '',
    }
    this.handleAddMovieInputChange = this.handleAddMovieInputChange.bind(this);
    this.handleAddMovieButtonClick = this.handleAddMovieButtonClick.bind(this);
    this.handleSearchBarInputChange = this.handleSearchBarInputChange.bind(this);
    this.handleSearchBarButtonClick = this.handleSearchBarButtonClick.bind(this);
    this.handleWatchedButtonClick = this.handleWatchedButtonClick.bind(this);
  }

  handleAddMovieInputChange(e) {
    this.setState({ addTitle: e.target.value });
  }

  handleAddMovieButtonClick(e) {
    e.preventDefault();

    let moviesList = this.state.movieList;
    let newTitle = this.state.addTitle;

    // end the function call if the movie has already been added or the input field is empty
    for (let i = 0; i < moviesList.length; i++) {
      if (moviesList[i].title === this.state.addTitle || newTitle.length === 0) {
        // make process stop here
        return; // maybe add an alert also
      }
    }

    // copy movieList
    let movieListCopy = moviesList.slice()

    // needs an if statement to check if movieList is === ExampleData or movieList is empty
    if (moviesList === ExampleData) {
      movieListCopy = []; 
    }

    // add this.state.addTitle to movieListCopy
    movieListCopy.push({title: newTitle});

    // update state with copied & pushed movieList
    this.setState({ movieList: movieListCopy, visibleMovieList: movieListCopy });
    // this.setState({ visibleMovieList: movieListCopy });
  }

  handleSearchBarInputChange(e) {
    // console.log(e.target.value);
    // let caseIgnoreTerm = new RegExp(/e.target.value/, i);
    // console.log(caseIgnoreTerm);
    this.setState({ searchFor: e.target.value });
  }

  handleSearchBarButtonClick(e) {
    e.preventDefault();

    let tempList = [];
    let moviesList = this.state.movieList;

    if (this.state.searchFor.length < 1) {
      tempList = moviesList;
    };
    if (this.state.searchFor.length > 0) {
      for (let i = 0; i < moviesList.length; i++) {
        if(moviesList[i]['title'].includes(this.state.searchFor)) {
          tempList.push(moviesList[i]);
        }
      }
      if (tempList.length === 0) {
        tempList = NotAwesome;
      }
    };
    
    this.setState({ visibleMovieList: tempList });
  }

  handleWatchedButtonClick(e) {
    // console.log(e.target.movie.watched);
    // e.target.watched = !e.target.watched;
    // console.log(e.target.watched);
  }

  render() {
    return(
    <div className='main'>
      <h2 className='page-name'>{this.state.name}</h2>
      <AddMovie onChange={this.handleAddMovieInputChange} onClick={this.handleAddMovieButtonClick} />
      <Search onChange={this.handleSearchBarInputChange} onClick={this.handleSearchBarButtonClick} />
      <MovieList movies={this.state.visibleMovieList} /*watched={this.state.visibleMovieList.watched.toString()}*/ onClick={this.handleWatchedButtonClick} />
    </div>
  )}
}

export default App;

