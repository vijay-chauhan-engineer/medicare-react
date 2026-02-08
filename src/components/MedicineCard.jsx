import React from "react";

export default function MedicineCard({ medicine }) {
  return (
    <div className="border rounded shadow p-4 flex justify-between items-center hover:shadow-lg transition">
      <div>
        <h3 className="font-bold">{medicine.name}</h3>
        <p className="text-sm text-gray-600">₹{medicine.price}</p>
      </div>
      <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  );
}
