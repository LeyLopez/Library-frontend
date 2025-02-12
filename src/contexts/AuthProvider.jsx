import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token && user) {
      setAuth(user);
    } else {
      setAuth(null);
    }
    
    setLoading(false);
  }, []);

  const login = (username, password) => {
    
    const users = [
      {username: "admin", password: "admin123", role: "admin"},
      {username: "cliente", password: "cliente123", role: "cliente"}
    ];

    const user = users.find(
      (u)=> u.username === username && u.password === password
    );

    if (user){
      const token = "fake-jwt-token";
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setAuth(user);
      return true; //login success

    }else{
      return false; //Login failed
    };
  };

  

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
