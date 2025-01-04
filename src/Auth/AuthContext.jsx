import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  
  const toggleAuth = (id) => {
    localStorage.setItem("uid", id);
    setisAuth(true);
  };
  
  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };