import React, { useState } from "react";

const IncomeList = ({ incomes, deleteIncome, editIncome }) => {
  const [editingId, setEditingId] = useState(null);
  const [editDescription, setEditDescription] = useState("");
  const [editAmount, setEditAmount] = useState(0);
  const [editCategory, setEditCategory] = useState("salary");
  const [editDate, setEditDate] = useState("");

  const handleEdit = (income) => {
    setEditingId(income.id);
    setEditDescription(income.description);
    setEditAmount(income.amount);
    setEditCategory(income.category);
    setEditDate(income.date);
  };

  const saveEdit = (id) => {
    editIncome(id, {
      description: editDescription,
      amount: parseFloat(editAmount),
      category: editCategory,
      date: editDate,
    });
    setEditingId(null);
  };

  return (
    <div className="income-list">
      <h2>Income</h2>
      <ul>
        {incomes.map((income) => (
          <li key={income.id}>
            {editingId === income.id ? (
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
                  <option value="salary">Salary</option>
                  <option value="freelance">Freelance</option>
                  <option value="investment">Investment</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="date"
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                />
                <button onClick={() => saveEdit(income.id)}>Save</button>
              </>
            ) : (
              <>
                <span>{income.description}</span>
                <span>${income.amount}</span>
                <span>{income.category}</span>
                <span>{income.date}</span>
                <button onClick={() => handleEdit(income)}>Edit</button>
                <button onClick={() => deleteIncome(income.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;