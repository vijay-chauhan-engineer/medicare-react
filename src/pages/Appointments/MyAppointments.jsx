import { useEffect, useState } from "react";

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(data);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        <div className="space-y-3">
          {appointments.map((a, idx) => (
            <div
              key={idx}
              className="p-3 border rounded shadow flex justify-between"
            >
              <div>
                <p>Doctor ID: {a.doctorId}</p>
                <p>Date: {a.date}</p>
                <p>Time: {a.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
