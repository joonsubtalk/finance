import React, { Component } from 'react';
import Transaction from '../Transaction/Transaction';

export default class ItemList extends Component {
  render() {

    return (
      <div className="o-itemList">
        {
          localData.transactions.map((info)=> {
            if (cdate !== info.date) {
              cdate = info.date;
              isNewDate = true;
            }
            
            return <Transaction key={info.id} info={info} />
          })
        }
      </div>
    )
  }
}
