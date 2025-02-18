import React from "react";

const Balance = ({ totalBalance }) => {
  return (
    <div className="balance">
      <h2>Total Balance</h2>
      <p>${totalBalance}</p>
    </div>
  );
};

export default Balance;