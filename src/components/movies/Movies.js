import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions';

export class Movies extends React.Component {
  constructor(props, context){
    super(props, context);

  }

  movieRow(movie, index) {
    return <div key={index} className="movieRow">{movie.title}</div>;
  }

  render() {
    return (
      <div>
        <h1 className="pageTitle">Movies</h1>
          <div className="movieContainer">{this.props.movies.map(this.movieRow)}</div>
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
