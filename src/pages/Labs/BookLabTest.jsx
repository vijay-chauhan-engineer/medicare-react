import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BookLabTest() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [hour, setHour] = useState("01");
  const [minute, setMinute] = useState("00");
  const [ampm, setAmPm] = useState("AM");

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date) return alert("Please select date");

    const finalTime = `${hour}:${minute} ${ampm}`;

    const tests = JSON.parse(localStorage.getItem("labTests")) || [];
    tests.push({ testId: id, date, time: finalTime });

    localStorage.setItem("labTests", JSON.stringify(tests));

    setSuccess(true);
    setTimeout(() => navigate("/reports"), 1500);
  };

  const hours = [...Array(12)].map((_, i) => String(i + 1).padStart(2, "0"));
  const minutes = [...Array(60)].map((_, i) => String(i).padStart(2, "0"));

  return (
    <div className="max-w-md mx-auto mt-5 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Book Lab Test</h2>

      {success ? (
        <div className="p-4 bg-green-100 border border-green-500 text-green-700 rounded">
          Test booked successfully! Redirecting...
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="date"
            className="w-full p-2 border rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          {/* 12-hour time selection */}
          <div className="flex gap-2">
            <select
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              className="flex-1 p-2 border rounded"
            >
              {hours.map((h) => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>

            <select
              value={minute}
              onChange={(e) => setMinute(e.target.value)}
              className="flex-1 p-2 border rounded"
            >
              {minutes.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>

            <select
              value={ampm}
              onChange={(e) => setAmPm(e.target.value)}
              className="p-2 border rounded"
            >
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Confirm Test Booking
          </button>
        </form>
      )}
    </div>
  );
}
