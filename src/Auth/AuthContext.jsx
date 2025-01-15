import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  const [user, setUser] = useState(null);
  
  const toggleAuth = (userF) => {
    localStorage.setItem("user", JSON.stringify(userF));
    setisAuth(true);
    setUser(userF)
  };
  
  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };