import React from "react";

const Header = (props) => {
  const { balance, income, spend } = props;
  const appHeader = {
	backgroundColor: "#d4d4d4",
    height: "90px",
    padding: "20px",
    color: "#000",
    marginBottom: "10px"
  };
  return (
	  <div style={appHeader}>
	  	<div style={{maxWidth: 800, margin: "auto"}}>
		    <h2>Balance</h2>
		    <h3>{balance} CZK</h3>
		    <div>
		    	<span style={{color: "green", marginRight: 20}}>Income: {income}Kc</span>
		    	<span style={{color: "red"}}>Spendings: {spend}Kc</span>
		    </div>
		</div>
	  </div>
  )
};

export default Header;