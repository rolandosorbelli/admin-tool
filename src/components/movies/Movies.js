import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions';
import MovieList from './MovieList';

export class Movies extends React.Component {
  constructor(props, context){
    super(props, context);

  }

  // movieRow(movie, index) {
  //   return <div key={index} className="movieRow">{movie.title}</div>;
  // }

  render() {
    const {movies} = this.props;
    return (
      <div>
        <h1 className="pageTitle">Movies</h1>
          <MovieList movies={movies}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  };
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
