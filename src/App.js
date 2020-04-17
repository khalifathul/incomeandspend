import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import './App.css';

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
        list: this.state.list.concat([{
          title: title.value,
          amount: amount.value,
          date: today,
          isIncome: e === "income" ? true : false
        }])
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
          <div>
            {this.state.list.map(function(item, index){
              let classes = item.isIncome ? 'income' : 'spend';
              return <div className={classes} key={index}>
                <p>{item.date}<br/><span className="amount">{item.amount}</span></p>
                <h4>{item.title}</h4>
                <span className="close" onClick={this.removeList.bind(this, index)}>X</span>
              </div>
            }, this)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
