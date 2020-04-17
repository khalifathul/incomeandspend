import React from "react";

const Form = (props) => {
  const { addIncome, addSpend } = props;
  return (
	<React.Fragment>
		<input id="title" type="text" placeholder="name" className="form-control form-control-lg" />
		<input id="amount" type="number" placeholder="amount" className="form-control form-control-lg" />
		<button class="btn btn-success btn-lg" type="button"  onClick={addIncome}>Add Income</button>
		&nbsp;&nbsp;
		<button class="btn btn-danger btn-lg" type="button"  onClick={addSpend}>Add Spending</button>
	</React.Fragment>
  )
};

export default Form;