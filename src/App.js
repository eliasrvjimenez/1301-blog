import React from 'react';
import './App.css';
import NavBar from './components/index';
import { BrowserRouter as Router, Routes, Route}
      from 'react-router-dom';
import Home from './pages/home';
import {Blogs,Blog2} from './pages/blogs';
import Footer from "./footer.js";



function App() {
  return (
  <Router>
   <NavBar />
   <div className="page-holder">

   <Routes>
     <Route path='/1301-blog' exact element={<Home />} />
     <Route path='/blog-1' element={<Blogs/>} />
     <Route path='/blog-2' element={<Blog2/>}/>
   </Routes>
      <Footer />
   </div>
   </Router>
  );
}

export default App;
