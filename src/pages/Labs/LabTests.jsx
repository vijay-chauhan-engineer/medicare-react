import TestCard from "../../components/TestCard";

export default function LabTests() {
  const tests = [
    { id: 1, name: "Blood Test", price: 200 },
    { id: 2, name: "Thyroid Test", price: 350 },
    { id: 3, name: "Vitamin Test", price: 250 },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Available Lab Tests</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {tests.map(test => <TestCard key={test.id} test={test} />)}
      </div>
    </div>
  );
}
