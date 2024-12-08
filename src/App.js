// import './App.css';
// import { FunMath } from './components/FunMath';
// import { Navbar } from './components/Navbar';
import { Contactus } from './components/contactus/Contactus';
import { Form } from './components/form/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FunMath } from './components/funmath/FunMath';
import { Twitter } from './components/twiter/Twitter';
import {LessonPlanner} from './components/lessonPlanner/LessonPlanner';
function App() {
  return (
    <>
  
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FunMath/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/twitter' element={<Twitter/>}/>
        <Route path='/lessonPlanner' element={<LessonPlanner/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
