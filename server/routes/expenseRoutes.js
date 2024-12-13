const express = require("express");
const {
  addExpense,
  getExpenses,
  trackBudget,
  saveExpensesToCSV,
  loadExpensesFromCSV,
} = require("../controllers/expenseController");

const router = express.Router();

router.post("/add", addExpense);
router.get("/", getExpenses);
router.get("/track-budget", trackBudget);
router.get("/save", saveExpensesToCSV);
router.get("/load", loadExpensesFromCSV);

module.exports = router;
