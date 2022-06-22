import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Inicio } from './components/Inicio';
import { QuienesSomos } from './components/QuienesSomos';
import { Historia } from './components/Historia';
import { Lanzamientos } from './components/Lanzamientos';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Inicio/>} />
          <Route exact path='/quienessomos' element={<QuienesSomos/>} />
          <Route exact path='/historia' element={<Historia/>} />
          <Route exact path='/lanzamientos' element={<Lanzamientos/>} />
          <Route exact path='/contacto' element={<Contacto/>} />
        </Routes>
        <Footer/>

      </BrowserRouter>
    </>
  );
}

export default App;
