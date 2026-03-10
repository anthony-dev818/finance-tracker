import React from 'react';

const CATEGORIES = [
  'All',
  'Salary',
  'Freelance',
  'Investments',
  'Food',
  'Transport',
  'Utilities',
  'Entertainment',
  'Healthcare',
  'Shopping',
  'Other'
];

export function CategoryFilter({ selectedCategory, onSelect }) {
  return (
    <div className="category-filter">
      <h3>Filter by Category</h3>
      <div className="category-buttons">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => onSelect(category === 'All' ? null : category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}