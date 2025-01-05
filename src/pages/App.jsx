import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {AuthContext} from '../Auth/AuthContext';

function App() {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const nav = useNavigate();

  useEffect(()=>{      
    if (!isAuth && localStorage.getItem("uid") != null) {
      let id =  localStorage.getItem("uid");
      id ? toggleAuth(id): null;     
    }else{
      isAuth? nav("/transactions"):nav("/signin")
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

  usuario: 
    nombre
    email
    password
    numero_telefonico
    cuenta

  cuenta
    tipo   {own, deudas, prestamo}: 
    saldo
    transaccion[]

  transaccion:
    cta_origen
    cta_destino
    tipo{ingreso, egreso}
    metodo (efectivo, electronica)
    fecha
    monto
    nota/descripcion
    categoria




  */ 
export default App
