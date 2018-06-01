// <h3>Add Movie</h3>
//   <input type="text"
//     onKeyPress={this.onPressEnter}
//     onChange={this.onTitleChange}
//     value={this.state.movie.title}
//     className="inputField"/>
//
//   <input type="submit" value="Submit" onClick={this.onClickSave} className="inputButton"/>
//
//
//     this.state = {
//       movie: {title: ''}
//     };
//
//     this.onTitleChange = this.onTitleChange.bind(this);
//     this.onClickSave = this.onClickSave.bind(this);
//     this.onPressEnter = this.onPressEnter.bind(this);
//   }
//
//   onTitleChange(event){
//     const movie = this.state.movie;
//     movie.title = event.target.value;
//     this.setState({movie: movie});
//   }
//
//   onClickSave(){
//     this.props.actions.createMovie(this.state.movie);
//   }
//
//   onPressEnter(e){
//     if (e.key === 'Enter') {
//       this.props.actions.createMovie(this.state.movie);
//     }
//   }
