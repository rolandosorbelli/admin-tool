import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as movieAction from '../../actions/movieActions';

class Movies extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      movie: {title: ''}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event){
    const movie = this.state.movie;
    movie.title = event.target.value;
    this.setState({movie: movie});
  }

  onClickSave(){
    this.props.dispatch(movieAction.createMovie(this.state.movie));
  }

  render() {
    return (
      <div>
        <h1 className="pageTitle">Movies</h1>
        <p>At vel indoctum consetetur. Inermis accumsan vel cu. Modo meis platonem eu quo, summo definiebas eam eu.</p>
        <h3>Add Movie</h3>
          <input type="text" onChange={this.onTitleChange} value={this.state.movie.title} className="inputField"/>

          <input type="submit" value="Submit" onClick={this.onClickSave} className="inputButton"/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    movies: state.movies
  };
}

Movies.propTypes = {
  dispatch: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Movies);
