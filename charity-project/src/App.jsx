
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './NavBar';
import About from './About';
import Home from './Home';
import Causes from './Causes';
import Blog from './Blog';
import Volunteer from './Volunteer';
import Contact from './Contact';
import Event from './Event';
import Donate from './Donate';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/causes' element={<Causes/>}/>
        <Route path='/event' element={<Event />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/volunteer' element={<Volunteer />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/donate' element={<Donate/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
