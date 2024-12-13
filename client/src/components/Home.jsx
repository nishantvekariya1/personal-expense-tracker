import React from "react";
import { useNavigate } from "react-router-dom";
import { saveExpenses, loadExpenses } from "../utils/api";

const Home = () => {
  const navigate = useNavigate();

  const handleSave = async () => {
    await saveExpenses();
    alert("Expenses saved to CSV!");
  };

  const handleLoad = async () => {
    await loadExpenses();
    alert("Expenses loaded from CSV!");
    const response = await fetchExpenses();
    saveExpenses(response.data);
  };

  return (
    <>
      <div className="container">
        <h1>Budget Tracker Menu</h1>
        <div className="home-buttons">
          <button onClick={() => navigate("/add-expense")}>Add Expense</button>
          <button onClick={() => navigate("/view-expenses")}>
            View Expenses
          </button>
          <button onClick={() => navigate("/track-budget")}>
            Track Budget
          </button>
          <button onClick={handleSave}>Save Expenses to CSV</button>
          <button onClick={handleLoad}>Load Expenses from CSV</button>
        </div>
      </div>
    </>
  );
};

export default Home;
