import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ProfileViewPage extends Component {

  render() {
    const user = this.props.auth.getIn(['user', 'attributes']);


    return (
      <div className="lead">
        <h2>Customer info:</h2>
        <dl className="dl-horizontal">
          <dt>Name:</dt>
          <dd>{user.get('name')}</dd>
          <br/>
          <dt>Email:</dt>
          <dd>{user.get('email')}</dd>
          <br/>
          <dt>Phone:</dt>
          <dd>{user.get('phone')}</dd>
          <br/>
          <dt>Sex:</dt>
          <dd>{user.get('sex')}</dd>
          <br/>
          <dt>Birthday:</dt>
          <dd>{user.get('birthday')}</dd>
          <br/>
          <dt>Country:</dt>
          <dd>{user.get('country')}</dd>
          <br/>
          <dt>City:</dt>
          <dd>{user.get('city')}</dd>
          <br/>
          <dt>Address:</dt>
          <dd>{user.get('address')}</dd>
        </dl>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(ProfileViewPage);
