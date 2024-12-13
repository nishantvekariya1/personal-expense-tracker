import React, { useState } from "react";
import { trackBudget } from "../utils/api";
import { useNavigate } from "react-router-dom";

const BudgetTracker = () => {
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  const handleTrack = async () => {
    const response = await trackBudget(budget);
    setStatus(response.data);
  };

  return (
    <>
      <div className="container">
        <h1>Budget Tracker</h1>
        <form className="add-expense-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="number"
            placeholder="Monthly Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
          <button type="button" onClick={handleTrack}>
            Track Budget
          </button>
        </form>
        {status && (
          <p className="budget-status">
            Total Expenses: ₹ {status.total} | Remaining: ₹ {status.remaining}
            {status.exceeded && " (You have exceeded your budget!)"}
          </p>
        )}
        <button className="exit-button" onClick={() => navigate("/")}>
          Exit
        </button>
      </div>
    </>
  );
};

export default BudgetTracker;
