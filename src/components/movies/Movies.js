import React, {PropTypes} from 'react';

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
    alert(`Saving ${this.state.movie.title}.`);
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

export default Movies;
