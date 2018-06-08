import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions';

class ManageMovie extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <h1>Manage Movies</h1>
    );
  }
}

ManageMovie.PropTypes = {
  //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageMovie);
