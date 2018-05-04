import React, {PropTypes} from 'react';
import Navbar from './common/Navbar'

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
};

export default App;
