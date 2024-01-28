import React from 'react';

const OrderList = ({ orders, onCancel }) => {
  return (
    <div className="order-list">
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <span className="order-details">Order ID: {order.id}, Choose Dish: {order.chooseDish}, Price: ${order.price}, Table: {order.table}</span>
            <button onClick={() => onCancel(order.id)} className="cancel-button">Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
