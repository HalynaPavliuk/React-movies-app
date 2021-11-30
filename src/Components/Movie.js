import React from 'react';

function Movie(props) {
    const {
        Poster: poster,
        Title: title,
        Genre: genre,
        Year: year,
        ImdbID: id,
        Type: type,
    } = props;

    return  <div className="col s12 m7">
            <div className="card" id={id}>
                <div className="card-image">
                <img src={poster} />
                </div>
                <div className="card-content">
                <p>{title}</p>
                <p>{genre}</p>
                <p>{year} - {type}</p>
                </div> 
            </div>
            </div>
           

}

export default Movie ;