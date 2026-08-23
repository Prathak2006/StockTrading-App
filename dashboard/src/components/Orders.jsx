import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './Orders.css';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/allOrders`,  {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    
     <div className="orders-container">
      <h2 className="orders-title">Orders</h2>

      {orders.length === 0 ? (
        <p className="empty-orders">
          No orders placed yet
        </p>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>

                <td
                  className={
                    order.mode === "BUY"
                      ? "buy-mode"
                      : "sell-mode"
                  }
                >
                  {order.mode}
                </td>

                <td>{order.qty}</td>

                <td>₹{order.price}</td>

                <td className="completed-status">
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
   
  
  );
};

export default Orders;