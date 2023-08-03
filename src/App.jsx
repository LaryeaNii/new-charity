
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './NavBar';
import About from './About';
import Home from './Home';
import Causes from './Causes';
import Volunteer from './Volunteer';
import Contact from './Contact';
import Event from './Event';
import Donate from './Donate';
import charityData from './CharityData';
import Footer from './Footer';
import BlogReader from './BlogReader';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home  charityData={charityData} />} />
        <Route path="/about" element={<About />} />
        <Route path='/blogs' element={<Causes/>}/>
        <Route path='/gallery' element={<Event />} />
        <Route path='/volunteer' element={<Volunteer />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/donate' element={<Donate/>} />
        <Route path='/blogreader' element={<BlogReader/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
