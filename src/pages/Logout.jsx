import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();         // clear session
    navigate("/login"); // go back to login
  }, []);

  return <p className="p-6">Logging out...</p>;
};

export default Logout;