import React, { useState } from 'react';
import { TransactionForm } from '../components/TransactionForm';
import { TransactionList } from '../components/TransactionList';
import { ChartDisplay } from '../components/ChartDisplay';
import { CategoryFilter } from '../components/CategoryFilter';

export function Dashboard({ 
  transactions, 
  addTransaction, 
  deleteTransaction,
  getIncome,
  getExpenses,
  getBalance,
  getCategoryTotals 
}) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredTransactions = selectedCategory
    ? transactions.filter((t) => t.category === selectedCategory)
    : transactions;

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Personal Finance Tracker</h1>
        <div className="balance-card">
          <h2>Current Balance</h2>
          <p className="balance-amount">${getBalance().toFixed(2)}</p>
          <div className="balance-details">
            <span className="income">+${getIncome().toFixed(2)}</span>
            <span className="expense">-${getExpenses().toFixed(2)}</span>
          </div>
        </div>
      </header>

      <div className="dashboard-grid">
        <div className="left-column">
          <TransactionForm onAdd={addTransaction} />
          <CategoryFilter 
            selectedCategory={selectedCategory || 'All'} 
            onSelect={setSelectedCategory} 
          />
        </div>
        
        <div className="center-column">
          <ChartDisplay 
            income={getIncome()} 
            expenses={getExpenses()}
            categoryData={getCategoryTotals()}
          />
        </div>
        
        <div className="right-column">
          <TransactionList 
            transactions={filteredTransactions} 
            onDelete={deleteTransaction}
          />
        </div>
      </div>
    </div>
  );
}