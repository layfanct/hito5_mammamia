//import React from 'react';
//import Header from './Header';
import CardPizza from '../components/CardPizza';

import React, { useEffect, useState } from 'react';



const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  // useEffect para consumir la API de pizzas
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data); // Actualizamos el estado con los datos obtenidos de la API
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div>
      {/*<Header />*/}
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            desc={pizza.desc}
            ingredients={pizza.ingredients}
            price={pizza.price}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

