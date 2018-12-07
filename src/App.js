import React, { Component } from 'react';
import './App.css';
import Fake from './container/Fake';
import AddTransaction from './container/AddTransaction/AddTransaction';
import TransactionList from './container/TransactionList/TransactionList';
import Footer from './container/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTransaction />
        {/* <Fake /> */}
        <TransactionList />
        <div>
          Friday 21st September________Today
          <div>Food</div>
          <div>Food</div>
          <div>Total</div>
        </div>
        <div>
          Thursday 20nd September__Yesterday
          <div>Food</div>
          <div>Food</div>
          <div>Total</div>
        </div>
        <div>
          Wednesday 19th September_2 days ago
          <div>Food</div>
          <div>Food</div>
          <div>Total</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
