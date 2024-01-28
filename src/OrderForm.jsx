import React, { useState } from 'react';

const OrderForm = ({ onTakeOrder }) => {
  const [orderId, setOrderId] = useState('');
  const [chooseDish, setChooseDish] = useState('');
  const [price, setPrice] = useState('');
  const [selectedTable, setSelectedTable] = useState('');

  const handleOrder = () => {
    if (!orderId.trim() || !chooseDish.trim() || !price.trim() || !selectedTable) return;
    const newOrder = {
      id: parseInt(orderId.trim()),
      chooseDish: chooseDish.trim(),
      price: parseFloat(price),
      table: selectedTable,
    };
    onTakeOrder(newOrder);
    setOrderId('');
    setChooseDish('');
    setPrice('');
    setSelectedTable('');
  };

  return (
    <div className="order-form">
      <div className="form-control">
        <label htmlFor="orderId">Order ID:</label>
        <input
          type="text"
          id="orderId"
          value={orderId}
          onChange={e => setOrderId(e.target.value)}
          placeholder="Order ID"
        />
      </div>
      <div className="form-control">
        <label htmlFor="chooseDish">Choose Dish:</label>
        <input
          type="text"
          id="chooseDish"
          value={chooseDish}
          onChange={e => setChooseDish(e.target.value)}
          placeholder="Choose Dish"
        />
      </div>
      <div className="form-control">
        <label htmlFor="price"> Choose Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder="Price"
        />
      </div>
      <div className="form-control">
        <label htmlFor="selectedTable">Select Table:</label>
        <select
          id="selectedTable"
          value={selectedTable}
          onChange={e => setSelectedTable(e.target.value)}
        >
          <option value="">Select Table</option>
          <option value="table1">Table 1</option>
          <option value="table2">Table 2</option>
          <option value="table3">Table 3</option>
        </select>
      </div>
      <button onClick={handleOrder} className="take-order-button">Take Order</button>
    </div>
  );
};

export default OrderForm;
