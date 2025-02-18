import React, { useState } from "react";

const ExpenseList = ({ expenses, deleteExpense, editExpense }) => {
  const [editingId, setEditingId] = useState(null);
  const [editDescription, setEditDescription] = useState("");
  const [editAmount, setEditAmount] = useState(0);
  const [editCategory, setEditCategory] = useState("food");
  const [editDate, setEditDate] = useState("");

  const handleEdit = (expense) => {
    setEditingId(expense.id);
    setEditDescription(expense.description);
    setEditAmount(expense.amount);
    setEditCategory(expense.category);
    setEditDate(expense.date);
  };

  const saveEdit = (id) => {
    editExpense(id, {
      description: editDescription,
      amount: parseFloat(editAmount),
      category: editCategory,
      date: editDate,
    });
    setEditingId(null);
  };

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {editingId === expense.id ? (
              <>
                <input
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <input
                  type="number"
                  value={editAmount}
                  onChange={(e) => setEditAmount(e.target.value)}
                />
                <select
                  value={editCategory}
                  onChange={(e) => setEditCategory(e.target.value)}
                >
                  <option value="food">Food</option>
                  <option value="transport">Transport</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="date"
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                />
                <button onClick={() => saveEdit(expense.id)}>Save</button>
              </>
            ) : (
              <>
                <span>{expense.description}</span>
                <span>${expense.amount}</span>
                <span>{expense.category}</span>
                <span>{expense.date}</span>
                <button onClick={() => handleEdit(expense)}>Edit</button>
                <button onClick={() => deleteExpense(expense.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;