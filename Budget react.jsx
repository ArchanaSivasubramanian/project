import React, { useState } from 'react';
import BudgetItem from './BudgetItem';

function Budget() {
  const [budgetItems, setBudgetItems] = useState([]);
  const [newBudgetItem, setNewBudgetItem] = useState({});

  const handleAddBudgetItem = (budgetItem) => {
    setBudgetItems([...budgetItems, budgetItem]);
    setNewBudgetItem({});
  };

  const handleEditBudgetItem = (budgetItem) => {
    const updatedBudgetItems = budgetItems.map((bi) => (bi.id === budgetItem.id ? budgetItem : bi));
    setBudgetItems(updatedBudgetItems);
  };

  const handleDeleteBudgetItem = (id) => {
    const updatedBudgetItems = budgetItems.filter((bi) => bi.id !== id);
    setBudgetItems(updatedBudgetItems);
  };

  return (
    <div>
      <h2>Budget</h2>
      <form>
        <label>
          Category:
          <input type="text" value={newBudgetItem.category} onChange={(e) => setNewBudgetItem({ ...newBudgetItem, category: e.target.value })} />
        </label>
        <br />
        <label>
          Amount:
          <input type="number" value={newBudgetItem.amount} onChange={(e) => setNewBudgetItem({ ...newBudgetItem, amount: e.target.value })} />
        </label>
        <br />
        <button onClick={() => handleAddBudgetItem(newBudgetItem)}>Add Budget Item</button>
      </form>
      <ul>
        {budgetItems.map((budgetItem) => (
          <BudgetItem
            key={budgetItem.id}
            budgetItem={budgetItem}
            handleEditBudgetItem={handleEditBudgetItem}
            handleDeleteBudgetItem={handleDeleteBudgetItem}
          />
        ))}
      </ul>
      <p>Total Budget: ${budgetItems.reduce((acc, curr) => acc + curr.amount, 0)}</p>
    </div>
  );
}

export default Budget;