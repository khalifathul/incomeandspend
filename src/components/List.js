import React, { Component, Fragment } from 'react';

class List extends Component {
  removeList(index) {
    this.props.removeList(index);
  }
  render() {
    return (
      <Fragment>
        {this.props.list.map((item, index) => {
          let classes = item.isIncome ? 'income' : 'spend';
          return <div className={classes} key={index}>
            <p className="mb-0">{item.date}<br/><span className="amount">{item.amount}</span></p>
            <h2><small className="text-muted">{item.title}</small></h2>
            <button type="button" className="close" aria-label="Close" onClick={this.removeList.bind(this, index)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        }, this)}
      </Fragment>
    )
  }
};

export default List;

