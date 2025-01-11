import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  
  const toggleAuth = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setisAuth(true);
  };
  
  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };