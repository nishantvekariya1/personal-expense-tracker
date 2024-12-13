import React, { useState } from "react";
import { addExpense } from "../utils/api";
import { useNavigate } from "react-router-dom";

const AddExpenseForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    date: "",
    category: "",
    amount: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addExpense(form);
    onAdd(response.data);
    setForm({ date: "", category: "", amount: "", description: "" });
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <h1>Add Expense</h1>
        <form className="add-expense-form" onSubmit={handleSubmit}>
          <label>Date</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
          />

          <label>Category</label>
          <input
            type="text"
            placeholder="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
          />

          <label>Amount</label>
          <input
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            required
          />

          <label>Description</label>
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />

          <button type="submit">Add Expense</button>
        </form>
        <button className="exit-button" onClick={() => navigate("/")}>
          Exit
        </button>
      </div>
    </>
  );
};

export default AddExpenseForm;
