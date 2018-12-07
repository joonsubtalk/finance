import React, { Component } from 'react'

export default class Transaction extends Component {

  render() {

    const { name, amount, card, category, date, active } = this.props.info;

    return (
      <div className="c-transaction">
        <div className="c-transaction__category">{category}</div>
        <div className="c-transaction__merchant">{name}</div>
        <div className="c-transaction__amount">${amount}</div>
        <div className="c-transaction__edit">edit</div>
      </div>
    )
  }
}
