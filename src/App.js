import './App.css';
// import { FunMath } from './components/FunMath';
// import { Navbar } from './components/Navbar';
import { Contactus } from './components/contactus/Contactus';
import { Form } from './components/form/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FunMath } from './components/funmath/FunMath';

function App() {
  return (
    <>
  
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FunMath/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
