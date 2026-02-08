import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="space-y-3">
          {cart.map((item, idx) => (
            <div
              key={idx}
              className="p-3 border rounded shadow flex justify-between"
            >
              <p>{item.name}</p>
              <p>₹{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
