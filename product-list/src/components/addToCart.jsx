const Cart = () => {
    return(
         <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>

      {Cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        Cart.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-4 mb-4 shadow-sm"
          >
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p className="font-medium">
              Total: ${item.price * item.quantity}
            </p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => increaseQty(item.id)}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                +
              </button>

              <button
                onClick={() => decreaseQty(item.id)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                -
              </button>

              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      <div className="mt-6 border-t pt-4">
        <h2 className="text-xl font-semibold">
          Total Items: {totalItems}
        </h2>
        <h2 className="text-xl font-semibold">
          Total Price: ${totalPrice}
        </h2>
      </div>
    </div>
    )
}
export default Cart