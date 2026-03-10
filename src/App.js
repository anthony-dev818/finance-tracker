import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTransactions } from './hooks/useTransactions';
import { Dashboard } from './pages/Dashboard';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import './index.css';

function App() {
  const {
    transactions,
    addTransaction,
    deleteTransaction,
    getIncome,
    getExpenses,
    getBalance,
    getTransactionsByMonth,
    getCategoryTotals,
  } = useTransactions();

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-brand">💰 FinanceTracker</div>
          <ul className="nav-links">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/reports">Reports</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>

        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={
                <Dashboard 
                  transactions={transactions}
                  addTransaction={addTransaction}
                  deleteTransaction={deleteTransaction}
                  getIncome={getIncome}
                  getExpenses={getExpenses}
                  getBalance={getBalance}
                  getCategoryTotals={getCategoryTotals}
                />
              } 
            />
            <Route 
              path="/reports" 
              element={
                <Reports getTransactionsByMonth={getTransactionsByMonth} />
              } 
            />
            <Route 
              path="/settings" 
              element={<Settings transactions={transactions} />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;