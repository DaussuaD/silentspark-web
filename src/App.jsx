import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../src/assets/css/style.css'
import Homepages from './pages/homepages'
import Loginpages from './pages/loginpages'
import Signinpages from './pages/signinpages';
import Gurupages from './pages/gurupages';
import Bookingpages from './pages/bookingpages';
import Paymentpages from './pages/paymentpages';
import Loadingpages from './pages/loadingpages';
import Failed from './pages/failed';
import Succes from './pages/succes';
import Gatherpages from './pages/gatherpages';
import Homeguru from '../src/pages/halaman/homeguru'
import Berikankelas from './pages/halaman/berikankelas';
import Loginguru from './pages/halaman/loginguru';
import Signinguru from './pages/halaman/signinguru';
import Tentangguru from './pages/halaman/tentangguru';
import Userguru from './pages/halaman/userguru'
import LogAdmin from './pages/adminpages/logAdmin';
import DashboardPages from './pages/adminpages/dashboardPages';
import PelamarPages from './pages/adminpages/pelamarPages';
import RequiredAuth from './components/RequiredAuth';



const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/'element={<Homepages/>}/>
      <Route path='/homepages'element={<Homepages/>}/>
      <Route path='/loginpages'element={<Loginpages/>}/>
      <Route path='/signinpages'element={<Signinpages/>}/>
      <Route path='/gurupages'element={<Gurupages/>}/>
      <Route path='/bookingpages'element={<Bookingpages/>}/>
      <Route path='/paymentpages'element={<Paymentpages/>}/>
      <Route path='/loadingpages'element={<Loadingpages/>}/>
      <Route path='/failed'element={<Failed/>}/>
      <Route path='/succes'element={<Succes/>}/>
      <Route path='/gatherpages'element={<Gatherpages/>}/>
      {/* halaman guru */}
      <Route path='/homeguru'element={<Homeguru/>}/>
      <Route path='/berikankelas'element={<Berikankelas/>}/>
      <Route path='/loginguru'element={<Loginguru/>}/>
      <Route path='/signinguru'element={<Signinguru/>}/>
      <Route path='/tentangguru'element={<Tentangguru/>}/>
      // <Route path='/userguru'element={<Userguru/>}/>
      <Route path='/userguru'element={RequiredAuth(Userguru)}/>
      {/* Super admin */}
      <Route path ='/logAdmin' element={<LogAdmin/>}/>
      <Route path='/dashboardPages' element={<DashboardPages/>}/>
      <Route path='/pelamarPages' element={<PelamarPages/>}/>
    </Routes>
   </Router>
  )
}

export default App
