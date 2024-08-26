/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const register = async (userData) => {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      setIsLoading(false);

      if (response.ok) {
        navigate("/login");
        return { ok: true };
      } else {
        setError(data.error);
        return { ok: false, error: data.error };
      }
    } catch (err) {
      setIsLoading(false);
      setError("Ocurrió un error al registrar.");
      console.error("Error en el registro:", err);
    }
  };

  const login = async (userData) => {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      setIsLoading(false);

      if (response.ok) {
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/inicio"); // Redirigir después del inicio de sesión exitoso
        return { ok: true };
      } else {
        setError(data.error);
        return { ok: false, error: data.error };
      }
    } catch (err) {
      setIsLoading(false);
      setError("Ocurrió un error al iniciar sesión.");
      console.error("Error en el login:", err);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, error, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
