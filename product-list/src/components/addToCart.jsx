import React from "react";

function CartPage({ cart, removeFromCart, decreaseQuantity }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="mt-4 bg-red-600 w-52 p-3 text-white font-medium rounded-md text-lg">
        Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p className="mt-4 text-gray-700">Your cart is empty</p>
      ) : (
        <div className="mt-4 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="p-4  flex flex-col mt-2"
            >
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.price * item.quantity}</p>
              </div>

              <div className="flex space-x-2 mt-2 md:mt-0">
                <button
                  className="bg-red-500 text-white rounded-md px-3 mt-2 py-1 hover:bg-red-600 "
                  onClick={() => decreaseQuantity(item.id)}
                >
                  Decrease
                </button>
                <button
                  className="bg-red-500 text-white rounded-md px-3 mt-2 py-1 hover:bg-red-600 "
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 p-4 border-t border-gray-300">
            <h3 className="font-semibold text-lg">Total Items: {totalItems}</h3>
            <h3 className="font-semibold text-lg">Total Price: ${totalPrice}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;