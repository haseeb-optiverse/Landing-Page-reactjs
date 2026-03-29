import React from "react";
import product from "./product";
import { useNavigate } from "react-router-dom";

const Home = ({ addToCart }) => {
   const navigate = useNavigate();
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Product Store</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {product.map((item) => (
          <div
            key={item.id}
            className=" rounded-2xl shadow-lg p-4 text-center hover:shadow-xl "
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600 mb-3">${item.price}</p>

           <button
            onClick={() => addToCart(item)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add to Cart
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="ml-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Go to Cart
          </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
