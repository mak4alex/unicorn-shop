import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UpdatePasswordForm } from 'redux-auth/bootstrap-theme';
import Formsy from 'formsy-react';
import FRC from 'formsy-react-components'


class ProfileUpdatePage extends Component {

  render() {
    const user = this.props.auth.get('user').toJS();

    console.log(user);

    return (
      <div>
        <h2>Profile Update</h2>
        <div className="page-header">
          <h3>Update Contact</h3>
        </div>

        <Formsy.Form ref="myform" validatePristine layout="vertical">
          <FRC.Input
            name="contact[email]" value="" label="Email:"
            type="email" placeholder="Type email here..." required
            validations={{
              isEmail: true,
            }}
            validationErrors={{
              isEmail: 'This doesn’t look like a valid email address.',
            }}
          />
          <FRC.Input
            name="contact[name]" value="" label="Name:"
            type="text" placeholder="Type name here..." required
          />
          <FRC.Input
            name="contact[phone]" value="" label="Phone:"
            type="text" placeholder="Type phone here..." required
          />
          <FRC.Input
            name="contact[country]" value="" label="Country:"
            type="text" placeholder="Type country here..." required
          />
          <FRC.Input
            name="contact[city]" value="" label="City:"
            type="text" placeholder="Type city here..." required
          />
          <FRC.Textarea
            name="contact[address]"
            label="Address:"
            placeholder="Type street and house number here..."
            required
          />
          <button className="btn btn-default" type="submit">
            <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
            {' '}Update Profile
          </button>
        </Formsy.Form>
        <div className="page-header">
          <h3>Update Password</h3>
        </div>
        <UpdatePasswordForm />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(ProfileUpdatePage);