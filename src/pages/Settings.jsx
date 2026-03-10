import React from 'react';

export function Settings({ transactions }) {
  const handleExport = () => {
    const dataStr = JSON.stringify(transactions, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `finance-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  const handleClear = () => {
    if (window.confirm('Are you sure? This will delete all your data!')) {
      localStorage.removeItem('transactions');
      window.location.reload();
    }
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      
      <div className="settings-section">
        <h2>Data Management</h2>
        <button onClick={handleExport} className="btn-export">
          Export Data (JSON)
        </button>
        <button onClick={handleClear} className="btn-danger">
          Clear All Data
        </button>
      </div>

      <div className="settings-section">
        <h2>About</h2>
        <p>Personal Finance Tracker</p>
        <p>Data is stored locally.</p>
      </div>
    </div>
  );
}