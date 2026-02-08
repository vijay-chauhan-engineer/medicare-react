import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BookAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [hour, setHour] = useState("01");
  const [minute, setMinute] = useState("00");
  const [ampm, setAmPm] = useState("AM");

  const handleBooking = (e) => {
    e.preventDefault();
    if (!date) return alert("Please select date");

    const time = `${hour}:${minute} ${ampm}`;

    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push({ doctorId: id, date, time });
    localStorage.setItem("appointments", JSON.stringify(appointments));

    alert("Appointment booked successfully!");
    navigate("/appointments");
  };

  return (
    <div className="max-w-md mx-auto mt-5 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Book Appointment</h2>

      <form onSubmit={handleBooking} className="space-y-3">

        {/* Date */}
        <input
          type="date"
          className="w-full p-2 border rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* 12-Hour Time Picker */}
        <div className="flex space-x-2">

          {/* Hour */}
          <select
            className="border p-2 rounded w-1/3"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          >
            {Array.from({ length: 12 }, (_, i) => {
              let h = String(i + 1).padStart(2, "0");
              return <option key={h} value={h}>{h}</option>;
            })}
          </select>

          {/* Minute */}
          <select
            className="border p-2 rounded w-1/3"
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
          >
            {["00", "15", "30", "45"].map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          {/* AM/PM */}
          <select
            className="border p-2 rounded w-1/3"
            value={ampm}
            onChange={(e) => setAmPm(e.target.value)}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>

        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
