import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import List from './List';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')): []
    };
  }

  onClick(e) {
    let title = document.getElementById("title"),
        amount = document.getElementById("amount"),
        newDate = new Date(),
        today = `${newDate.getDate()}.${newDate.getMonth()}.${newDate.getFullYear()}`;
    if(title.value !== "" && amount.value !== "") {
      this.setState({ 
        list: [...this.state.list, {
          title: title.value,
          amount: amount.value,
          date: today,
          isIncome: e === "income" ? true : false
        }]
      })
      title.value = "";
      amount.value = "";
    }
  }

  removeList(index) {
    this.setState({
      list: this.state.list.filter((x,i) => i !== index )
    });
  }

  componentDidUpdate() {
    localStorage.setItem('list', JSON.stringify(this.state.list));
  }

  render() {
    const incomeFilter = this.state.list.filter(el => el.isIncome === true);
    const spendFilter = this.state.list.filter(el => el.isIncome === false);
    let incomeTotal = 0,
        spendTotoal = 0,
        balance = 0;
    incomeFilter.map((num) => incomeTotal += Number(num.amount));
    spendFilter.map((num) => spendTotoal += Number(num.amount));
    balance = incomeTotal - spendTotoal;
    return (
      <div>
        <Header balance={balance} income={incomeTotal} spend={spendTotoal} />
        <div className="container">
          <Form addList addIncome={this.onClick.bind(this, "income")} addSpend={this.onClick.bind(this, "spend")} />
          <br /><br />
          <List list={this.state.list} removeList={this.removeList.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
