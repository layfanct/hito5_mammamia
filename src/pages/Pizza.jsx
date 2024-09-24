import React, { useEffect, useState } from "react";
import './Pizza.css'; 

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const pizzaId = "p001"; 

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`);
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza details:", error);
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) {
    return <p>Cargando pizza...</p>;
  }

  return (
    <div className="pizza-container">
      <div className="pizza-image-container">
        <img src={pizza.img} alt={pizza.name} className="pizza-image" />
      </div>
      <div className="pizza-info">
        <h2>{pizza.name}</h2>
        <p>{pizza.desc}</p>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}> {ingredient}</li>
          ))}
        </ul>
        <p className="pizza-price">Precio: ${pizza.price}</p>
        <button className="custom-btn">Añadir al carrito</button>
      </div>
    </div>
  );
};

export default Pizza;
