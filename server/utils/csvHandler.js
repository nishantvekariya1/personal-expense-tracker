// const fs = require("fs");
// const path = require("path");
// const csvWriter = require("csv-writer").createObjectCsvWriter;

// const filePath = path.join(__dirname, "../expenses.csv");

// const csvHeader = [
//   { id: "date", title: "DATE" },
//   { id: "category", title: "CATEGORY" },
//   { id: "amount", title: "AMOUNT" },
//   { id: "description", title: "DESCRIPTION" },
// ];

// const saveToCSV = (data) => {
//   const writer = csvWriter({ path: filePath, header: csvHeader });
//   writer.writeRecords(data);
// };

// const loadFromCSV = () => {
//   const data = [];
//   if (fs.existsSync(filePath)) {
//     const content = fs.readFileSync(filePath, "utf-8");
//     const lines = content.trim().split("\n").slice(1);
//     for (const line of lines) {
//       const [date, category, amount, description] = line.split(",");
//       data.push({ date, category, amount: parseFloat(amount), description });
//     }
//   }
//   return data;
// };

// module.exports = { saveToCSV, loadFromCSV };
