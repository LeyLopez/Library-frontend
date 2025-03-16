import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import { userService } from "../api/userService";


export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    localStorage.getItem("isAuthenticated") === "true"
  );

  const [token, setToken] = useState(() => localStorage.getItem("token"));


  const [roles, setRoles] = useState(() => 
    JSON.parse(localStorage.getItem("roles") || "[]")
  );
  

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated ? "true" : "false");
  }, [isAuthenticated]);


  const login = async (loginRequest) => {
    try {
      console.log(loginRequest);
      const { data } = await axios.post("http://localhost:8080/api/auth/login", loginRequest);
      console.log(data);


      if (!data.token || data.token.split(".").length !== 3) {
        throw new Error("Token inválido recibido del servidor.");
      }

      setIsAuthenticated(true);
      setToken(data.token);
      localStorage.setItem("token", data.token);
      
      setRoles(data.roles);
      localStorage.setItem("roles", JSON.stringify(data.roles));

      console.log(roles);

      await loadUser(data.token);
    } 
    catch (error) {
      console.error("Error al iniciar sesión:", error.response?.data?.message || error.message);
      throw error;
    }
  };

  const loadUser = async (token) => {
    try {
      const decodedToken = jwtDecode(token);
      const client = await userService.getUserByUsername(decodedToken.sub, token);
      localStorage.setItem("user", JSON.stringify(client));
      setUser(client);
    } catch (error) {
      console.error("Error al cargar el usuario:", error.response?.data?.message || error.message);
    }
  };


  const logout = () => {
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    setRoles([]);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("roles");
    localStorage.clear();
  };


  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated, roles}}>
      {children}
    </AuthContext.Provider>
  );


};