import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuth({ username: "usuario_demo", role: "admin" });
    } else {
      setAuth(null);
    }
    
    setLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setAuth({ username: "usuario_demo", role: "admin" });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
