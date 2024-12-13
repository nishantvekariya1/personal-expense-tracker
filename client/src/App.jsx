import React, { useEffect, useState } from "react";
import { fetchExpenses, saveExpenses, loadExpenses } from "./utils/api";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./styles/App.css";
import BudgetTracker from "./components/BudgetTracker";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const getExpenses = async () => {
      const response = await fetchExpenses();
      setExpenses(response.data);
    };
    getExpenses();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add-expense"
          element={
            <AddExpenseForm
              onAdd={(expense) => setExpenses([...expenses, expense])}
            />
          }
        />
        <Route
          path="/view-expenses"
          element={<ExpenseList expenses={expenses} />}
        />
        <Route path="/track-budget" element={<BudgetTracker />} />
      </Routes>
    </Router>
  );
};

export default App;
