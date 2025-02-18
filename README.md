
Expense Tracker
An intuitive and visually appealing **Expense Tracker** built with **React**. This application helps users manage their income and expenses, visualize their financial data with charts, and track their overall balance.

Features

Income and Expense Tracking:
  - Add, edit, and delete income and expenses.
  - Separate forms and lists for income and expenses.
 Charts:
  - Pie chart for income distribution by category.
  - Pie chart for expense distribution by category.
 Balance and Summary:
  - Display total balance (income - expenses).
  - Show total income and total expenses.
  Filtering:
  - Filter transactions by type (income or expense).
  Dark Mode:
  - Toggle between light and dark themes.
  Responsive Design:
  - Works seamlessly on all screen sizes.

Technologies Used

- React: Front-end library for building the user interface.
- Recharts: Library for creating interactive charts.
- CSS: Custom styles for a modern and responsive design.
- HTML: Structure of the application.



## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker
   ```

2. Install dependencies:
   
   npm install
   

3. Run the application:
   
   npm start
   

4. Open the app:
   Visit `http://localhost:3000` in your browser.



Usage

1. Add Income:
   - Use the Income Form to add income transactions.
   - Specify the description, amount, category, and date.

2. Add Expenses:
   - Use the Expense Form to add expense transactions.
   - Specify the description, amount, category, and date.

3. View Charts:
   - Check the **Income Chart** and **Expense Chart** to visualize your financial data.

4. **Track Balance:
   - The **Balance** section shows your total balance (income - expenses).

5. Filter Transactions:
   - Use the **Filter** dropdown to view only income or only expenses.

6. Toggle Dark Mode:
   - Click the **Theme Toggle** button to switch between light and dark themes.

---

## Folder Structure

```
src/
├── components/
│   ├── ExpenseForm.jsx
│   ├── IncomeForm.jsx
│   ├── ExpenseList.jsx
│   ├── IncomeList.jsx
│   ├── Balance.jsx
│   ├── Filter.jsx
│   ├── ExpenseSummary.jsx
│   ├── ThemeToggle.jsx
│   ├── ExpenseChart.jsx
│   └── IncomeChart.jsx
├── App.js
├── index.js
├── styles.css
└── theme.css
```

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

Enjoy managing your finances with the **Expense Tracker**! 🚀



