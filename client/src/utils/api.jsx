import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api/expenses" });

export const fetchExpenses = () => API.get("/");
export const addExpense = (expense) => API.post("/add", expense);
export const trackBudget = (budget) =>
  API.get(`/track-budget?budget=${budget}`);
export const saveExpenses = () => API.get("/save");
export const loadExpenses = () => API.get("/load");
