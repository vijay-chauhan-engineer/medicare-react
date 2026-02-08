import { Link } from "react-router-dom";

export default function TestCard({ test }) {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="text-lg font-bold">{test.name}</h3>
      <p className="text-gray-600 mb-2">Price: ₹{test.price}</p>

      <Link
        to={`/book-test/${test.id}`}
        className="bg-green-600 text-white px-3 py-2 rounded block text-center hover:bg-green-700"
      >
        Book Test
      </Link>
    </div>
  );
}
