import React from "react";

const Form = (props) => {
  const { addIncome, addSpend } = props;
  return (
	<React.Fragment>
		<input id="title" type="text" placeholder="name" />
		<input id="amount" type="number" placeholder="amount"/>
		<button name="income" onClick={addIncome}>Add Income</button>
		<button name="spending" onClick={addSpend}>Add Spending</button>
	</React.Fragment>
  )
};

export default Form;