import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"; 

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/DashBoard";

import DoctorsList from "./pages/Doctors/DoctorList";
import BookAppointment from "./pages/Doctors/BookAppointment";
import MyAppointments from "./pages/Appointments/MyAppointments";

import MyRecords from "./pages/Records/MyRecords";
import UploadRecord from "./pages/Records/UploadRecord";

import LabTests from "./pages/Labs/LabTests";
import LabReports from "./pages/Labs/LabReports";
import BookLabTest from "./pages/Labs/BookLabTest"; // ⭐ NEW FILE

import Medicines from "./pages/Pharmacy/Medicines";
import Cart from "./pages/Pharmacy/Cart";
import Emergency from "./pages/Emergency";

function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 p-4 w-full">
        <Routes>
          
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/doctors"
            element={
              <PrivateRoute>
                <DoctorsList />
              </PrivateRoute>
            }
          />

          <Route
            path="/book/:id"
            element={
              <PrivateRoute>
                <BookAppointment />
              </PrivateRoute>
            }
          />

          <Route
            path="/appointments"
            element={
              <PrivateRoute>
                <MyAppointments />
              </PrivateRoute>
            }
          />

          <Route
            path="/records"
            element={
              <PrivateRoute>
                <MyRecords />
              </PrivateRoute>
            }
          />

          <Route
            path="/upload"
            element={
              <PrivateRoute>
                <UploadRecord />
              </PrivateRoute>
            }
          />

          <Route
            path="/labs"
            element={
              <PrivateRoute>
                <LabTests />
              </PrivateRoute>
            }
          />

          {/* ⭐ ADD BOOK TEST ROUTE HERE */}
          <Route
            path="/book-test/:id"
            element={
              <PrivateRoute>
                <BookLabTest />
              </PrivateRoute>
            }
          />

          <Route
            path="/reports"
            element={
              <PrivateRoute>
                <LabReports />
              </PrivateRoute>
            }
          />

          <Route
            path="/medicines"
            element={
              <PrivateRoute>
                <Medicines />
              </PrivateRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />

          <Route
            path="/emergency"
            element={
              <PrivateRoute>
                <Emergency />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
