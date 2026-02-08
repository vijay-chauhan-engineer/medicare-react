import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadRecord() {
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();

    reader.onload = () => {
      const date = new Date();

      const record = {
        id: Date.now(),
        name: file.name,
        url: reader.result,
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString(),
      };

      const saved = JSON.parse(localStorage.getItem("medicalRecords")) || [];
      saved.push(record);

      localStorage.setItem("medicalRecords", JSON.stringify(saved));

      alert("Record uploaded successfully!");

      navigate("/records"); // redirect back to records page
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Upload Medical Record</h2>

      <label className="block w-full mb-4 cursor-pointer">
        <span className="bg-green-600 text-white px-4 py-2 rounded">
          Select File
        </span>
        <input
          type="file"
          className="hidden"
          accept="image/*,application/pdf"
          onChange={handleUpload}
        />
      </label>

      {fileName && <p>Selected: {fileName}</p>}
    </div>
  );
}
