

import './App.css';
import NotFound from './Pages/NotFound'

import { Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Calculator from './Projects/Calculator';
import Projects from './components/Projects'



function App() {


  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/calculator'>Calculator</Link>
        <Link to='/projects'>Projects</Link>
      </nav>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/calculator' element= {<Calculator/>} />
        <Route path='/projects' element={< Projects/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
    </div>

  );
}

export default App;
