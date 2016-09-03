import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UsersActions from '../../actions/UsersActions';
import { UserList } from '../../components';

class UserListApp extends Component {

  static propTypes = {
    userList: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {
    const { userList: {}, actions } = this.props;

    return (
      <div className="hello">
        <h1>Hello World!</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userList: state.userList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UsersActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListApp);
