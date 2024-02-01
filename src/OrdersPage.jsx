import React, { useState, useEffect } from 'react';
import Header from './Header';
import OrderForm from './OrderForm';
import OrderList from './OrderList';
import "./OrdersPage.css";

const OrdersPage = () => {
  // Initialize orders state with local storage data or empty array if no data is found
  const [orders, setOrders] = useState(() => {
    const storedOrders = localStorage.getItem('orders');
    return storedOrders ? JSON.parse(storedOrders) : [];
  });

  // Update local storage when orders state changes
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const handleTakeOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  const handleCancelOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
  };

  return (
    <div className="container">
      <Header />
      <OrderForm onTakeOrder={handleTakeOrder} />
      <div>
        <h2>Orders</h2>
        <h3>Table 1</h3>
        <OrderList orders={orders.filter(order => order.table === 'Table 1')} onCancel={handleCancelOrder} />
        
        <h3>Table 2</h3>
        <OrderList orders={orders.filter(order => order.table === 'Table 2')} onCancel={handleCancelOrder} />
        
        <h3>Table 3</h3>
        <OrderList orders={orders.filter(order => order.table === 'Table 3')} onCancel={handleCancelOrder} />
      </div>
    </div>
  );
};

export default OrdersPage;
