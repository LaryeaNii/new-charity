
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './NavBar';
import About from './About';
import Home from './Home';
import Causes from './Causes';
import Volunteer from './Volunteer';
import Contact from './Contact';
import Gallery from './Gallery';
import Donate from './Donate';
import charityData from './CharityData';
import Footer from './Footer';
import BlogReader from './BlogReader';
import blogdata from './BlogData';
import Events from './Events';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home  charityData={charityData} blogdata={blogdata} />} />
        <Route path="/about" element={<About />} />
        <Route path='/blogs' element={<Causes blogdata={blogdata}/>}/>
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/volunteer' element={<Volunteer />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/faq" element={<Contact/>} />
        <Route path="/team" element={<About/>} />
        <Route path='/donate' element={<Donate/>} />
        <Route path='/events' element={<Events/>} />
        <Route path="/blogreader/:blogId" element={<BlogReader blogdata={blogdata} />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
