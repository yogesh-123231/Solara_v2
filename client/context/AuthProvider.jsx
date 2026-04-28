/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const rememberedAuthUser = JSON.parse(
      localStorage.getItem("authUser") || "null"
    );
    if (rememberedAuthUser) {
      setAuth(rememberedAuthUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, admin, setAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
