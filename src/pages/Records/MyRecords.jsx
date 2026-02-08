import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MyRecords() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("medicalRecords")) || [];
    setRecords(saved);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Medical Records</h2>

      <Link
        to="/upload"
        className="bg-blue-600 text-white px-4 py-2 rounded inline-block mb-4"
      >
        Upload New Record
      </Link>

      {records.length === 0 ? (
        <p>No medical records uploaded yet.</p>
      ) : (
        <div className="space-y-3">
          {records.map((rec) => (
            <div
              key={rec.id}
              className="border p-3 rounded shadow flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{rec.name}</p>
                <p className="text-sm text-gray-600">
                  Uploaded: {rec.date} – {rec.time}
                </p>
              </div>

              <a
                href={rec.url}
                target="_blank"
                className="text-blue-600 underline"
              >
                View
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
