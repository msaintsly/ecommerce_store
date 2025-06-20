import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("authUser");
    if (user) setIsAuthenticated(true);
  }, []);

  const login = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find(
      (user) => user.email === email && user.password === password
    );

    if (found) {
      localStorage.setItem("authUser", JSON.stringify({ email }));
      setIsAuthenticated(true);
      return true;
    }

    return false;
  };

  const signup = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      return { success: false, message: "Email already exists" };
    }

    const newUser = { email, password };
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("authUser", JSON.stringify({ email }));
    setIsAuthenticated(true);

    return { success: true };
  };
  
  const logout = () => {
    localStorage.removeItem("authUser");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);