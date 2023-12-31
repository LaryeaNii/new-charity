
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
import Footer from './Footer';
import BlogReader from './BlogReader';
import Events from './Events';
import AboadakaPics from './AboadakaPics';
import Anniversary from './Anniversary';
import Prison from './prison';
import TestApp from './TestApp';
import Psych from './Pysch';
import More from './More';
import GirlChild from './GirlChild';
import Tour from './Tour';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path='/blogs' element={<Causes/>}/>
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/volunteer' element={<Volunteer />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/faq" element={<Contact/>} />
        <Route path="/test" element={<TestApp/>} />
        <Route path="/team" element={<About/>} />
        <Route path='/donate' element={<Donate/>} />
        <Route path='/events' element={<Events/>} />
        <Route path="/aboadaka" element={<AboadakaPics/>} />
        <Route path="/anniversary" element={<Anniversary/>} />
        <Route path="/prison" element={<Prison/>} />
        <Route path="/psych" element={<Psych/>} />
        <Route path="/girlchild" element={<GirlChild/>} />
        <Route path="/tour" element={<Tour/>} />
        <Route path="/more" element={<More/>} />
        <Route path="/blogreader/:blogId" element={<BlogReader />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
