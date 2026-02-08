import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, role }) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) return <Navigate to="/login" />;

  if (role && currentUser.role !== role) return <Navigate to="/" />;

  return children;
}
