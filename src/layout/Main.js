import React from 'react';
import Movies from "../Components/Movies";
import Preloader from '../Components/Preloader';
import Search from '../Components/Search';


const API_KEY = process.env.REACT_APP_API_KEY;

 class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        movies: [],
        loading: true}
  }


  componentDidMount() {
    fetch(`http://www.omdbapi.com/?&apikey=${API_KEY}&s=venom`)
      .then(res => res.json())
      .then(data => this.setState({movies: data.Search, loading: false}))
  }

  onSearch = (str, type = 'all') => {
    this.setState({loading: true})
    fetch(`http://www.omdbapi.com/?&apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
    .then(res => res.json())
    .then(data => this.setState({movies: data.Search, loading: false}))
}




  render() {
    const {movies, loading} = this.state;

    return <main className="container content">
      <Search searchMovie={this.onSearch}/>
      
       {loading ? (<Preloader />) : (<Movies movies={movies} />) } 
        
    </main>;
  }
}


export default Main;