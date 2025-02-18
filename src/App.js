import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import IncomeForm from "./components/IncomeForm";
import ExpenseList from "./components/ExpenseList";
import IncomeList from "./components/IncomeList";
import Balance from "./components/Balance";
import Filter from "./components/Filter";
import ExpenseSummary from "./components/ExpenseSummary";
import ThemeToggle from "./components/ThemeToggle";
import ExpenseChart from "./components/ExpenseChart";
import IncomeChart from "./components/IncomeChart";
import "./styles.css";
import "./theme.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [Filter, setFilter] = useState("all");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const addIncome = (income) => {
    setIncomes([...incomes, { ...income, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const deleteIncome = (id) => {
    setIncomes(incomes.filter((income) => income.id !== id));
  };

  const editExpense = (id, updatedExpense) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === id ? { ...expense, ...updatedExpense } : expense
      )
    );
  };

  const editIncome = (id, updatedIncome) => {
    setIncomes(
      incomes.map((income) =>
        income.id === id ? { ...income, ...updatedIncome } : income
      )
    );
  };

  const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
  const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const totalBalance = totalIncome - totalExpense;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <h1>Expense Tracker</h1>
      <Balance totalBalance={totalBalance} />
      <ExpenseSummary totalIncome={totalIncome} totalExpense={totalExpense} />
      <div className="cards-container">
        <div className="card income-card">
          <h2>Income</h2>
          <IncomeForm addIncome={addIncome} />
          <IncomeChart incomes={incomes} />
          <IncomeList
            incomes={incomes}
            deleteIncome={deleteIncome}
            editIncome={editIncome}
          />
        </div>
        <div className="card expense-card">
          <h2>Expenses</h2>
          <ExpenseForm addExpense={addExpense} />
          <ExpenseChart expenses={expenses} />
          <ExpenseList
            expenses={expenses}
            deleteExpense={deleteExpense}
            editExpense={editExpense}
          />
        </div>
      </div>
    </div>
  );
};

export default App;