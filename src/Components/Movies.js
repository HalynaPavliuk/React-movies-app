import React from 'react';
import Movie from './Movie';

function Movies(props) {
    const {movies = []} = props;

    return <div className="movies">
        {movies.length ? movies.map(movie => (<Movie key={movie.ImdbID} {...movie} />)) : <h4> File not found </h4>}
    </div>;
}

export default Movies ;