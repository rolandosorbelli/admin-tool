import React, {PropTypes} from 'react';
import MovieListRow from './MovieListRow';

const MovieList = ({movies}) => {
  return (
    <div>
      <div className="movieContainer">{movies.map(movie =>
        <MovieListRow key={movie.id} movie={movie}/>
      )}
      </div>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;
