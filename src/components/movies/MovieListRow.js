import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const MovieListRow = ({movie}) => {
  return (
    <div className="movieRow">
      <h3 className="movieTitle">{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Producer: {movie.producer}</p>
      <p>Release Date: {movie.release_date}</p>
      <p><Link to={'/movie/' + movie.id}>Read more</Link></p>
      <Link to={'/movie/edit/' + movie.id}><div className="editButton">Edit movie info</div></Link>
    </div>
  );
};

MovieListRow.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieListRow;
