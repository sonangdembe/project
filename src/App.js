// import './App.css';
// import { FunMath } from './components/FunMath';
// import { Navbar } from './components/Navbar';
import { Contactus } from './components/contactus/Contactus';
import { Form } from './components/form/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FunMath } from './components/funmath/FunMath';
import { Twitter } from './components/twiter/Twitter';
import {LessonPlanner} from './components/lessonPlanner/LessonPlanner';
import { Home } from './components/ai/Home';
import { HomePage } from './components/quiz/HomePage';
import { PowerPointLikeApp } from './components/edited/PowerPointLikeApp';
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
        <Route path='/ai' element={<Home/>}/>
        <Route path='/quiz' element={<HomePage/>}/>
        <Route path='/power' element={<PowerPointLikeApp/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
