/* eslint-disable arrow-body-style */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React from 'react';


class CheckoutOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colorModifier: 1,
      quantity: 1,
    };

    this.handleColorChoice = this.handleColorChoice.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  handleColorChoice(e) {
    this.setState({
      colorModifier: Number(e.target.value),
    }, () => {
      this.props.handleColorChoice(this.state.colorModifier);
    });
  }

  handleQuantity(e) {
    this.setState({
      quantity: Number(e.target.value),
    }, () => {
      this.props.handleQuantity(this.state.quantity);
    });
  }

  render() {
    const quantityOptions = [];
    for (let i = 2; i < 21; i += 1) {
      quantityOptions.push(i);
    }

    return (
      <div className="checkout-options-container">
          <label className="select-label">Color</label>
          <select id="select-color" onChange={this.handleColorChoice}>
            <option value="" disabled selected>Select a Color</option>
            {this.props.colors.map((color) => {
              return (
                <option value={color.price_modifier}>{color.color_name}</option>
              );
            })}
          </select>
          <label className="select-label">Quantity</label>
          <select id="select-color" onChange={this.handleQuantity}>
            <option className="select-value" value="1"> 1</option>
            {quantityOptions.map((num) => {
              return (
                <option className="select-value" value={num}> {num}</option>
              );
            })}
          </select>
          <button className="btn buy-it-now-button">Buy it now</button>
          <button className="btn add-to-cart-button">Add to cart</button>
      </div>
    );
  }
}

export default CheckoutOptions;
