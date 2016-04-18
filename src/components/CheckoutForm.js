import React, { Component } from 'react';


export default class CheckoutForm extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.payTypeInput = null;
    this.deliveryTypeInput = null;
    this.emailInput = null;
    this.nameInput = null;
    this.phoneInput = null;
    this.countryInput = null;
    this.cityInput = null;
    this.addressInput = null;
  }

  submitForm(e) {
    e.preventDefault();
    const contact = {      
      email: this.emailInput.value,
      name: this.nameInput.value,
      phone: this.phoneInput.value,
      country: this.countryInput.value,
      city: this.cityInput.value,
      address: this.addressInput.value,     
    };

    const data = this.props.prepareCart();
    data.order.pay_type = this.payTypeInput.value;
    data.order.delivery_type = this.deliveryTypeInput.value;
    data.order.contact = contact;

    console.log(data);

    this.props.postOrder(data);
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label htmlFor="pay-type">Pay Type:</label>
          <select id="pay-type" ref={c => this.payTypeInput = c}>
            <option value="">Select...</option>
            <option value="cash">By Cash</option>
            <option value="card">By Card</option>
          </select>
        </div>
        <div>
          <label htmlFor="delivery-type">Delivery Type:</label>
          <select id="delivery-type" ref={c => this.deliveryTypeInput = c}>
            <option value="">Select...</option>
            <option value="courier">By Courier</option>
            <option value="mail">By Mail</option>
            <option value="self_removal">By Self</option>
          </select>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" ref={c => this.emailInput = c} />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={c => this.nameInput = c} />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" ref={c => this.phoneInput = c} />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" ref={c => this.countryInput = c} />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" ref={c => this.cityInput = c} />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <br/>
          <textarea id="address" ref={c => this.addressInput = c}></textarea>
        </div>
        <div>
          <button type="submit">Order</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    );
  }
}
