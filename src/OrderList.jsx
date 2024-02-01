// OrderList.js
import React from 'react';
import "./OrderList.css";

const OrderList = ({ orders, onCancel }) => {
  return (
    <div className="order-list">
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <span className="order-details">
               {order.chooseDish},-${order.price},-{order.table}
            </span>
            <button onClick={() => onCancel(order.id)} className="cancel-button">DeleteOrder</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
