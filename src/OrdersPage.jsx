import React, { useState } from 'react';
import Header from './Header';
import OrderForm from './OrderForm';
import OrderList from './OrderList';

const OrdersPage = () => {
  const [orders, setOrders] = useState([
    { id: 1, chooseDish: 'Pizza', price: 10, table: 'Table 1' },
    { id: 2, chooseDish: 'Burger', price: 8, table: 'Table 2' },
    { id: 3, chooseDish: 'Salad', price: 6, table: 'Table 3' },
  ]);

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
        <h1>Orders</h1>
        <h2>Table 1</h2>
        <OrderList orders={orders.filter(order => order.table === 'Table 1')} onCancel={handleCancelOrder} />
        
        <h2>Table 2</h2>
        <OrderList orders={orders.filter(order => order.table === 'Table 2')} onCancel={handleCancelOrder} />
        
        <h2>Table 3</h2>
        <OrderList orders={orders.filter(order => order.table === 'Table 3')} onCancel={handleCancelOrder} />
      </div>
    </div>
  );
};

export default OrdersPage;
