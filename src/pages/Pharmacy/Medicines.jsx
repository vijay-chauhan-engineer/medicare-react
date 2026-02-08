import MedicineCard from "../../components/MedicineCard";
import { useState, useEffect } from "react";

export default function Medicines() {
  const [medicines] = useState([
    { id: 1, name: "Paracetamol", price: 40 },
    { id: 2, name: "Crocin", price: 35 },
    { id: 3, name: "Amoxicillin", price: 80 },
  ]);

  const addToCart = (medicine) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(medicine);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${medicine.name} added to cart`);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Medicines</h2>
      <div className="space-y-3">
        {medicines.map((med) => (
          <div key={med.id}>
            <MedicineCard medicine={med} />
            <button
              className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
              onClick={() => addToCart(med)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
