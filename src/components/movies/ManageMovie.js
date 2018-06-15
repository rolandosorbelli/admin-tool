import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions';
import MovieForm from './MovieForm';

export class ManageMovie extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      movie: Object.assign({}, this.props.movie),
      errors: {}
    };

    this.updateMovieState = this.updateMovieState.bind(this);
    this.saveMovies = this.saveMovies.bind(this);
  }

  updateMovieState(event) {
    const field = event.target.name;
    let movie = this.state.movie;
    movie[field] = event.target.value;
    return this.setState({movie: movie});
  }

  saveMovies(event) {
    event.preventDefault();
    this.props.actions.saveMovies(this.state.movie);
  }

  render() {
    return (
        <MovieForm
          onChange={this.updateMovieState}
          movie={this.state.movie}
          errors={this.state.errors}
        />
    );
  }
}

ManageMovie.PropTypes = {
  movie: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let movie = {id: '', title: '', director: '', producer: '', release_date: '', description: ''};
  return {
    movie: movie
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageMovie);
