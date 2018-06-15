import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const MovieListRow = ({movie}) => {
  return (
    <div className="movieRow">
      <p><Link to={'/movie/edit/' + movie.id}>(edit)</Link></p>
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Producer: {movie.producer}</p>
      <p>Release Date: {movie.release_date}</p>
      <p><Link to={'/movie/' + movie.id}>Read more</Link></p>
    </div>
  );
};

MovieListRow.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieListRow;
