const Expense = require("../models/Expense");
const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");

const addExpense = async (req, res) => {
  const { date, category, amount, description } = req.body;

  try {
    const expense = await Expense.create({
      date,
      category,
      amount,
      description,
    });
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const trackBudget = async (req, res) => {
  const { budget } = req.query;

  try {
    const expenses = await Expense.find();
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const remaining = budget - total;
    res.json({ total, remaining, exceeded: remaining < 0 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const saveExpensesToCSV = async (req, res) => {
  try {
    const expenses = await Expense.find();
    const data = expenses.map(
      (expense) =>
        `${expense.date},${expense.category},${expense.amount},${expense.description}`
    );
    fs.writeFileSync(
      "expenses.csv",
      ["Date,Category,Amount,Description", ...data].join("\n")
    );
    res.status(200).json({ message: "Expenses saved to CSV" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loadExpensesFromCSV = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../expenses.csv");

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "CSV file not found." });
    }

    const csvData = fs.readFileSync(filePath, "utf8");
    const rows = csvData.split("\n").slice(1);

    const expenses = rows.map((row) => {
      const [date, category, amount, description] = row.split(",");

      if (!date || !category || !amount || !description) {
        throw new Error(
          `Invalid data: ${row}. All fields (date, category, amount, description) are required.`
        );
      }

      return {
        date: date.trim(),
        category: category.trim(),
        amount: amount.trim(),
        description: description.trim(),
      };
    });

    await Expense.insertMany(expenses);

    res.status(200).json({ message: "Expenses loaded from CSV successfully!" });
  } catch (error) {
    console.error("Error loading expenses from CSV:", error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addExpense,
  getExpenses,
  trackBudget,
  saveExpensesToCSV,
  loadExpensesFromCSV,
};
