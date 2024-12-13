import React from "react";
import { useNavigate } from "react-router-dom";

const ExpenseList = ({ expenses }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <h1 className="page-title">All Expenses</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.date}</td>
                <td>{expense.category}</td>
                <td>₹ {expense.amount}</td>
                <td>{expense.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="exit-button" onClick={() => navigate("/")}>
          Exit
        </button>
      </div>
    </>
  );
};

export default ExpenseList;
