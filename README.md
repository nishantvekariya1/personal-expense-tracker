# Personal Expense Tracker

Personal Expense Tracker is a simple yet powerful application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with TypeScript. It helps users manage their daily expenses, track spending against a budget, and save/load expenses using CSV files.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)

## Demo

![Home Page with All Buttons](https://github.com/nishantvekariya1/personal-expense-tracker/blob/master/Screenshots/1.png)
![Add Expense Page](https://github.com/nishantvekariya1/personal-expense-tracker/blob/master/Screenshots/2.png)
![All Expenses Page](https://github.com/nishantvekariya1/personal-expense-tracker/blob/master/Screenshots/3.png)
![Track Budget Page](https://github.com/nishantvekariya1/personal-expense-tracker/blob/master/Screenshots/4.png)
![Save All Expenses to CSV](https://github.com/nishantvekariya1/personal-expense-tracker/blob/master/Screenshots/5.png)
![All Expenses Saved in CSV File](https://github.com/nishantvekariya1/personal-expense-tracker/blob/master/Screenshots/6.png)
![Add Expenses Through CSV File](https://github.com/nishantvekariya1/personal-expense-tracker/blob/master/Screenshots/7.png)
![Load All Expenses from CSV](https://github.com/nishantvekariya1/personal-expense-tracker/blob/master/Screenshots/8.png)
![Updated All Expenses Page](https://github.com/nishantvekariya1/personal-expense-tracker/blob/master/Screenshots/9.png)

## Features
  - Add Expense: Log daily expenses with details like date, category, amount, and description
  - View Expenses: View all logged expenses with the ability to filter by category and date
  - Set and Track Budget: Set a monthly budget and track your spending in real-time
  - Save Expenses: Save all logged expenses to a CSV file for easy backup and future reference
  - Load Expenses: Load expenses from a CSV file and continue tracking

## Technologies Used

- **MongoDB**: NoSQL database for storing user and expense data
- **Express.js**: Web application framework for Node.js
- **React.js**: Frontend library for building user interfaces
- **Node.js**: JavaScript runtime for server-side development

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/personal-expense-tracker
    ```

2. Install the dependencies for both the client and server:
    ```bash
    # In the server directory
    cd server
    npm install

    # In the client directory
    cd client
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    # In the server directory
    PORT=write_your_port_here
    MONGO_URI=your_mongodb_url
    ```

4. Start the development servers:
    ```bash
    # In the server directory
    cd server
    npm run dev

    # In the client directory
    cd client
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:5173` to view the Personal Expense Tracker application.
