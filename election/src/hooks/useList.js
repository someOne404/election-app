import { useState } from 'react';

export const useList = (initialItems) => {

  const [ items, setItems ] = useState(initialItems);

  const addItem = (item) => {
    setItems([
      ...items,
      {
        ...item,
        id: Math.max(...items.map(c => c.id), 0) + 1
      },
    ]);
  }

  // replace
  const putItem = (item) => {
    const newItems = [ ...items ];
    const itemIndex = newItems.findIndex(c => c.id === item.id);
    newItems[itemIndex] = item;
    setItems(newItems);
  };

  // update
  const patchItem = (item) => {
    const newItems = [ ...items ];
    const itemIndex = newItems.findIndex(c => c.id === item.id);
    newItems[itemIndex] = {
      ...newItems[itemIndex],
      ...item,
    };
    setItems(newItems);
  };

  const deleteItem = (itemId) => {
    setItems(items.filter(c => c.id !== itemId));
  };

  const resetItems = () => setItems(initialItems);

  return [ items, addItem, putItem, patchItem, deleteItem, setItems ];
};