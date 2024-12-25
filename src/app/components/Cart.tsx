import React from "react";
const cartItems = [
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      image: "img",
    },
    {
      id: 2,
      name: "Cascilating Wood",
      price: 270000,
      quantity: 1,
      image: "img",
    },
  ];
  
  const Cart = () => {
    return (
      <div className="relative min-h-screen">
        <div>
          {cartItems.map((item) => (

            <div key={(item.id)}>
              <img src={item.image} alt={item.name} />
            
              <h2>{item.name}</h2>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Cart;
