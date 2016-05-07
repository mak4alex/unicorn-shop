import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ProfileHistoryPage extends Component {

  render() {
    const user = this.props.auth.get('user').toJS();

    console.log(user);

    return (
      <div>
        <h1>ProfileHistoryPage</h1>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(ProfileHistoryPage);
