import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to Medic</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <Link to="/doctors" className="p-4 border rounded shadow hover:shadow-lg">Find Doctors</Link>
        
        {/* FIXED PATH */}
        <Link to="/labs" className="p-4 border rounded shadow hover:shadow-lg">Lab Tests</Link>
        
        <Link to="/medicines" className="p-4 border rounded shadow hover:shadow-lg">Order Medicines</Link>
        <Link to="/appointments" className="p-4 border rounded shadow hover:shadow-lg">My Appointments</Link>
        <Link to="/records" className="p-4 border rounded shadow hover:shadow-lg">Medical Records</Link>
        <Link to="/emergency" className="p-4 border rounded shadow hover:shadow-lg text-red-500">Emergency</Link>
      </div>
    </div>
  );
}
