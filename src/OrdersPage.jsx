import React, { useState, useEffect } from 'react';
import Header from './Header';
import OrderForm from './OrderForm';
import OrderList from './OrderList';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  const saveOrdersToLocalStorage = (updatedOrders) => {
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  const takeOrder = (newOrder) => {
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    saveOrdersToLocalStorage(updatedOrders);
  };

  const cancelOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
    saveOrdersToLocalStorage(updatedOrders);
  };

  return (
    <div className="container">
      <Header />
      <OrderForm onTakeOrder={takeOrder} />
      <OrderList orders={orders} onCancel={cancelOrder} />
    </div>
  );
};

export default OrdersPage;
