import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './pages/App';
import Stats from './pages/Stats';
import Transactions from './pages/Transactions';
import Login from './pages/Login';
import Register from './pages/Register';
import './index.css'
import Layout from './components/Layout';
import {AuthContextProvider} from './Auth/AuthContext';


createRoot(document.getElementById('root')).render(
<AuthContextProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout> <App/> </Layout>} />
      <Route path="/transactions" element={<Layout> <Transactions/> </Layout>} />
      <Route path="/stats" element={<Layout> <Stats/> </Layout>} />
      <Route path="/account" element={<Layout> <>Account</> </Layout>} />
      <Route path="/user" element={<Layout> <>User</> </Layout>} />
      
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register/>} />
    </Routes>
  </BrowserRouter>

</AuthContextProvider >
)
