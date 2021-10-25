import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    token !== null && setAuth(true);
    console.log("entrooooo", isAuth, token);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
