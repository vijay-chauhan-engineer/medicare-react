import DoctorCard from "../../components/DoctorCard";

export default function DoctorsList() {
  const doctors = [
    { id: 1, name: "Dr. Chauhan Vijay", specialization: "Cardiologist" },
    { id: 2, name: "Dr. Sandip Dharajiya", specialization: "Dermatologist" },
    { id: 3, name: "Dr. Jaymin Bhatti", specialization: "General Physician" },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Available Doctors</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {doctors.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
}
