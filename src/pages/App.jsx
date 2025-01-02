import Login from "./Login"

function App() {

  return (
   <Login />
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
