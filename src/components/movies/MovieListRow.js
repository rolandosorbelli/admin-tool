import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const MovieListRow = ({movie}) => {
  return (
    <div className="movieRow">
      <h3><Link to={'/movie/' + movie.id}>{movie.title}</Link></h3>
      <p>Director: {movie.director}</p>
      <p>Producer: {movie.producer}</p>
      <p>Release Date: {movie.release_date}</p>
    </div>
  );
};

MovieListRow.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieListRow;
