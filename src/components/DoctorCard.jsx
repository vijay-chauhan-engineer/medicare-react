import { Link } from "react-router-dom";

export default function DoctorCard({ doctor }) {
  return (
    <div className="p-4 border rounded shadow flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold">{doctor.name}</h2>
        <p className="text-gray-600">{doctor.specialization}</p>
      </div>
      <Link
        to={`/book/${doctor.id}`} // must match /book/:id route
        className="mt-3 inline-block bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700"
      >
        Book Appointment
      </Link>
    </div>
  );
}
