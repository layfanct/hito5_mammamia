
import React, { useState } from 'react';
import { pizzaCart } from "../assets/pizza";
import './Cart.css'; 



const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // Función para aumentar la cantidad de pizzas
  const increaseQuantity = (id) => {
    setCart(cart.map(pizza => 
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    ));
  };

  // Función para disminuir la cantidad de pizzas
  const decreaseQuantity = (id) => {
    setCart(cart
      .map(pizza => pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza)
      .filter(pizza => pizza.count > 0)); // Elimina la pizza si la cantidad es 0
  };

  // Calcular el total de la compra
  const getTotal = () => {
    return cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);
  };

  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        cart.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} className="pizza-image" />
            <div className="pizza-details">
              <h2>{pizza.name}</h2>
              <p>Precio: ${pizza.price}</p>
              <p>Cantidad: {pizza.count}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
                <button onClick={() => increaseQuantity(pizza.id)}>+</button>
              </div>
            </div>
          </div>
        ))
      )}
      <h2>Total: ${getTotal()}</h2>
      <button className="checkout-btn">Pagar</button>
    </div>
  );
};

export default Cart;
