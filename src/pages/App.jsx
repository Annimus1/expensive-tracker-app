import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {AuthContext} from '../Auth/AuthContext';

function App() {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const nav = useNavigate();

  useEffect(()=>{      
    let user =  localStorage.getItem("user");
    user = JSON.parse(user);

    if (!isAuth && localStorage.getItem("user") != null || !isAuth && localStorage.getItem("user") != undefined) {
      user ? toggleAuth(user): null;     
    }else{
      // console.log(user.uid);
      isAuth? nav(`/${user.uid}/transactions`):nav("/signin")
    }
  },[isAuth]);
  
  
  return (
   <></>
  );
}



/*
  features
  debe gestionar varios usuarios 
  poder ingresar cuanto gano 
  poder tener deudas 
  poder tener cuentas por cobrar 
  que me diga en que gasto mi dinero con un digrama de torta 
  */ 
export default App
