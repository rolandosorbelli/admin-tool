import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const MovieListRow = ({movie}) => {
  return (
    <div className="movieRow">
      <p><Link to={'/movie/' + movie.title}>{movie.title}</Link></p>
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
