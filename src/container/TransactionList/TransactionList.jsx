import React, { Component } from 'react';

import localData from '../../config/data.json';

export default class TransactionList extends Component {

  render() {
    let cdate = null;
    let isNewDate = false;
    const header = <div>Header</div>;
    let amountOfDates = 0;
    let currentDate = null;

    // const lastDateInFetch = localData.transactions[localData.transactions.length - 1];
    // localData.forEach((entry)=> {
    //   if (entry.date === lastDateInFetch)
    //     return;
    //   if (entry.date !== currentDate) {
    //     currentDate = entry.date;
    //     amountOfDates++;
    //   }
    // });

    return (
      <div className="o-transactionList">
      </div>
    )
  }
}
