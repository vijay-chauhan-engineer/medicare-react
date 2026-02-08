import { useEffect, useState } from "react";

export default function LabReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const savedReports = JSON.parse(localStorage.getItem("labTests")) || [];
    setReports(savedReports);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Lab Reports</h2>

      {reports.length === 0 ? (
        <p>No reports available.</p>
      ) : (
        <div className="space-y-3">
          {reports.map((r, i) => (
            <div key={i} className="border p-3 rounded shadow">
              <p><b>Test:</b> {r.testName}</p>
              <p><b>Date:</b> {r.date}</p>
              <p><b>Time:</b> {r.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
