import React from 'react';
import './CardPizza.css'; 


const CardPizza = ({ name, desc, ingredients, price, img }) => {
  return (
    <div className="card-pizza">
      <img src={img} alt={name} className="pizza-image" />
      <h3>{name}</h3>
      <p>{desc}</p>
      
      <h2>Ingredientes:</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      
      <p>Precio: ${price}</p>
      <button className="custom-btn">Añadir al carrito</button>
    </div>
  );
};

export default CardPizza;
