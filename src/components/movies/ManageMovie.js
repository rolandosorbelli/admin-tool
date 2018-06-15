import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions';
import MovieForm from './MovieForm';

class ManageMovie extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      movie: Object.assign({}, this.props.movie),
      errors: {}
    };
  }

  render() {
    return (
        <MovieForm
          allMovies={[]}
          movie={this.state.movie}
          errors={this.state.errors}
        />
    );
  }
}

ManageMovie.PropTypes = {
  movie: PropTypes.object.isRequired
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
