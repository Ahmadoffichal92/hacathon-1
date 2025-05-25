import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import  SignUp from './assets/Auth/SignUp.jsx';
import Login from './assets/Auth/Login.jsx';
import Sidebar from './assets/Pages/Sidebar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
    <Routes>
      <Route path='/' element={<App/>}  />
      <Route path='Login' element={<Login/>}  />
      <Route path='SignUp' element={<SignUp/>}  />
         <Route path="Dashboard" element={<Sidebar/>} />
 
     
       
    </Routes>
    </BrowserRouter>

    
  </StrictMode>,

)
