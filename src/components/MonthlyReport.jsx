import React, { useState } from 'react';

export function MonthlyReport({ getTransactionsByMonth }) {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const transactions = getTransactionsByMonth(selectedYear, selectedMonth);
  
  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
    
  const expenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="monthly-report">
      <h2>Monthly Report</h2>
      
      <div className="report-filters">
        <select 
          value={selectedMonth} 
          onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
        >
          {months.map((month, index) => (
            <option key={month} value={index}>{month}</option>
          ))}
        </select>
        
        <select 
          value={selectedYear} 
          onChange={(e) => setSelectedYear(parseInt(e.target.value))}
        >
          {[2023, 2024, 2025, 2026].map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <div className="report-summary">
        <div className="report-card income">
          <h4>Income</h4>
          <p>${income.toFixed(2)}</p>
        </div>
        <div className="report-card expense">
          <h4>Expenses</h4>
          <p>${expenses.toFixed(2)}</p>
        </div>
        <div className="report-card balance">
          <h4>Net</h4>
          <p>${(income - expenses).toFixed(2)}</p>
        </div>
      </div>

      <div className="report-transactions">
        <h3>Transactions ({transactions.length})</h3>
        {transactions.length === 0 ? (
          <p>No transactions for this month</p>
        ) : (
          <ul>
            {transactions.map((t) => (
              <li key={t.id} className={t.type}>
                <span>{t.description}</span>
                <span className={t.type}>
                  {t.type === 'income' ? '+' : '-'}${parseFloat(t.amount).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}