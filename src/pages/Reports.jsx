import React from 'react';
import { MonthlyReport } from '../components/MonthlyReport';

export function Reports({ getTransactionsByMonth }) {
  return (
    <div className="reports-page">
      <h1>Financial Reports</h1>
      <MonthlyReport getTransactionsByMonth={getTransactionsByMonth} />
    </div>
  );
}