import { useLocalStorage } from './useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

export function useTransactions() {
  const [transactions, setTransactions] = useLocalStorage('transactions', []);

  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
      id: uuidv4(),
      date: new Date().toISOString(),
    };
    setTransactions((prev) => [newTransaction, ...prev]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const getIncome = () => 
    transactions
      .filter((t) => t.type === 'income')
      .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  const getExpenses = () => 
    transactions
      .filter((t) => t.type === 'expense')
      .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  const getBalance = () => getIncome() - getExpenses();

  const getTransactionsByMonth = (year, month) => {
    return transactions.filter((t) => {
      const date = new Date(t.date);
      return date.getFullYear() === year && date.getMonth() === month;
    });
  };

  const getCategoryTotals = () => {
    const categories = {};
    transactions.forEach((t) => {
      if (t.type === 'expense') {
        categories[t.category] = (categories[t.category] || 0) + parseFloat(t.amount);
      }
    });
    return categories;
  };

  return {
    transactions,
    addTransaction,
    deleteTransaction,
    getIncome,
    getExpenses,
    getBalance,
    getTransactionsByMonth,
    getCategoryTotals,
  };
}