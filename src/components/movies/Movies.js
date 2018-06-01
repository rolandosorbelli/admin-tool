import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions';

export class Movies extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      movie: {title: ''}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.onPressEnter = this.onPressEnter.bind(this);
  }

  onTitleChange(event){
    const movie = this.state.movie;
    movie.title = event.target.value;
    this.setState({movie: movie});
  }

  onClickSave(){
    this.props.actions.createMovie(this.state.movie);
  }

  onPressEnter(e){
    if (e.key === 'Enter') {
      this.props.actions.createMovie(this.state.movie);
    }
  }

  movieRow(movie, index) {
    return <div key={index} className="movieRow">{movie.title}</div>;
  }

  render() {
    return (
      <div>
        <h1 className="pageTitle">Movies</h1>
        <h3>Add Movie</h3>
          <input type="text"
            onKeyPress={this.onPressEnter}
            onChange={this.onTitleChange}
            value={this.state.movie.title}
            className="inputField"/>

          <input type="submit" value="Submit" onClick={this.onClickSave} className="inputButton"/>
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
