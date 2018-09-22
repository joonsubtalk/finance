import React, { Component } from 'react'
import { format, formatDistance } from 'date-fns';
import InputField from '../../components/InputField/InputField';

export default class AddTransaction extends Component {

  state = {
    currentDate : 's'
  }

  componentDidMount() {
    this.setState({ currentDate : this.renderCurrentDate() });
  }

  updateInput = (e) => {
    this.setState({ currentDate : e.target.value });
  }

  renderCurrentDate = () => {
    return format(new Date(), 'DD, MMM YYYY');
  }

  render() {
    return (
      <div className="c-addTransaction c-addTransaction--open">
        <div className="c-addTransaction__prompt">New Transaction +</div>
        <div className="c-addTransaction__card">
          <InputField field="card" type="string" />
          <InputField field="category" type="string" />
          <InputField field="amount" type="number" />
          <InputField field="details" type="string" />
          <InputField field="date"
            type="string"
            updateField={this.updateInput}
            populatedValue={this.state.currentDate}
          />
          <button className="c-addTransaction__button">
            Add Transaction
          </button>
        </div>
      </div>
    )
  }
}
