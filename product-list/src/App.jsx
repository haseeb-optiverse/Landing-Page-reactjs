
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/homePage";
import CartPage from "./components/addToCart";

function App() {
  const [cart, setCart] = useState(() => {
    const saveCart = localStorage.getItem("cart");
    return saveCart ? JSON.parse(saveCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((oldCart) => {
      const existing = oldCart.find((item) => item.id === product.id);
      if (existing) {
        return oldCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...oldCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((oldCart) => oldCart.filter((item) => item.id !== id));
  };

  const decreaseQuantity = (id) => {
    setCart((oldCart) =>
      oldCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <BrowserRouter>
      <nav className="bg-black text-white  flex justify-center gap-3 font-bold p-3 ">
        <Link className="hover:bg-white hover:text-black p-1 rounded-md"
         to="/">Products</Link> 
         
          <Link  className="hover:bg-white hover:text-black p-1 rounded-md" to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
