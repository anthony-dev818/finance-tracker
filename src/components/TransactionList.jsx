import React from 'react';

export function TransactionList({ transactions, onDelete }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatAmount = (amount, type) => {
    const prefix = type === 'income' ? '+' : '-';
    return `${prefix}$${parseFloat(amount).toFixed(2)}`;
  };

  return (
    <div className="transaction-list">
      <h2>Recent Transactions</h2>
      {transactions.length === 0 ? (
        <p className="no-transactions">No transactions yet. Add one above!</p>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id} className={`transaction-item ${transaction.type}`}>
              <div className="transaction-info">
                <span className="transaction-category">{transaction.category}</span>
                <span className="transaction-description">{transaction.description}</span>
                <span className="transaction-date">{formatDate(transaction.date)}</span>
              </div>
              <div className="transaction-actions">
                <span className={`transaction-amount ${transaction.type}`}>
                  {formatAmount(transaction.amount, transaction.type)}
                </span>
                <button 
                  onClick={() => onDelete(transaction.id)}
                  className="btn-delete"
                >
                  ×
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}