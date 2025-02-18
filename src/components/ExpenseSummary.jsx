import React from "react";

const ExpenseSummary = ({ totalIncome, totalExpense }) => {
  return (
    <div className="expense-summary">
      <h2>Summary</h2>
      <p>Total Income: ${totalIncome}</p>
      <p>Total Expenses: ${totalExpense}</p>
    </div>
  );
};

export default ExpenseSummary;