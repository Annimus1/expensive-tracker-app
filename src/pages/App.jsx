import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {AuthContext} from '../Auth/AuthContext';

function App() {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const nav = useNavigate();

  useEffect(()=>{      
    let user =  localStorage.getItem("user");
    user = JSON.parse(user);

    if (!isAuth && localStorage.getItem("user") != null) {
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
