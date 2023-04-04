import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './navbar/sideBar';
import Home from './home/home';
import Projects from './projects/project';
import About from './about/about';
import Contact from './contact/contact';

function App() {
  return (
    <Router>
      <div className='d-flex container-fluid p-0'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
