import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './pages/App'
import Login from './pages/Login';
import Register from './pages/Register';
import './index.css'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register/>} />
    </Routes>
  </BrowserRouter>
)
