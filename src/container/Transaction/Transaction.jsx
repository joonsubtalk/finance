import React, { Component } from 'react'

export default class Transaction extends Component {
  render() {
    return (
      <div className="c-transaction">
        <div className="c-transaction__category">Food</div>
        <div className="c-transaction__merchant">El Pollo Locco</div>
        <div className="c-transaction__amount">$7.99</div>
      </div>
    )
  }
}
