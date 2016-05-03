import React, { Component } from 'react';
import Formsy from 'formsy-react';
import FRC from 'formsy-react-components';


export default class CheckoutForm extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(input) {
    const data = this.props.prepareCart();
    data.order.pay_type = input.pay_type;
    data.order.delivery_type = input.delivery_type;
    data.order.contact = input.contact;

    console.log(data);

    this.props.postOrder(data);
  }

  render() {
    const payTypeOptions = [
      { value: '', label: 'Please select...' },
      { value: 'cash', label: 'By Cash' },
      { value: 'card', label: 'By Card' },
    ];

    const deliveryOptions = [
      { value: '', label: 'Please select...' },
      { value: 'courier', label: 'By Courier' },
      { value: 'mail', label: 'By Mail' },
      { value: 'self_removal', label: 'By Self' },
    ];

    return (
      <Formsy.Form onValidSubmit={this.submitForm} ref="myform" validatePristine>
        <fieldset>
          <legend>Order Options</legend>
          <FRC.Select
            name="pay_type"
            label="Pay Type:"
            help="This is a required select element."
            options={payTypeOptions}
            required
          />
          <FRC.Select
            name="delivery_type"
            label="Delivery Type:"
            help="This is a required select element."
            options={deliveryOptions}
            required
          />
        </fieldset>
        <fieldset>
          <legend>Contacts</legend>
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
        </fieldset>
        <fieldset>
          <legend>Address Info</legend>
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
        </fieldset>
        <div className="btn-group btn-group-lg pull-right" role="group">
          <button className="btn btn-default" type="reset">
            Reset{' '}
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
          <button className="btn btn-primary" type="submit">
            Order{' '}
            <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
          </button>
        </div>
      </Formsy.Form>
    );
  }
}
