import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Inicio } from './components/Inicio';
import { QuienesSomos } from './components/QuienesSomos';
import { Historia } from './components/Historia';
import { Lanzamientos } from './components/Lanzamientos';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Intranet } from './components/Intranet/Intranet';
import { Principal } from './components/Principal';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route exact path='/' element={<Principal ruta="/"/>} />
          <Route exact path='/quienessomos' element={<Principal ruta="quienessomos" />} />
          <Route exact path='/historia' element={<Principal ruta="historia" />} />
          <Route exact path='/lanzamientos' element={<Principal ruta="lanzamientos" />} />
          <Route exact path='/contacto' element={<Principal ruta="contacto" />} />
          <Route exact path='/login' element={<Principal ruta="login" />} />
          <Route exact path='/intranet' element={<Intranet ruta="intranet" />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
