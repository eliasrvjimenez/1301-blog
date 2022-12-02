import React from 'react';
import './App.css';
import NavBar from './components/index';
import { BrowserRouter as Router, Routes, Route}
      from 'react-router-dom';
import Home from './pages/home';
import {Blog1,Blog2} from './pages/blogs';
import Footer from "./footer.js";
import {Intro} from "./pages/choice-of-solitude";
import {BlogPage} from "./pages/blogmain";



function App() {
  return (
  <Router>
   <NavBar />
   <div className="page-holder">

   <Routes>
     <Route path='/1301-blog' element={<Home />} />
     <Route path='/1301-blog/home' exact element={<Home />} />
     <Route path='/1301-blog/blogs' element={<BlogPage/>} />
     <Route path='/1301-blog/overloaded-to-optimistic' element={<Blog1/>} />
     <Route path='/1301-blog/what-makes-a-writer' element={<Blog2/>}/>
     <Route path='/1301-blog/the-choice-of-solitude-over-socialization-intro' element={<Intro/>}/>
   </Routes>
      <Footer />
   </div>
   </Router>
  );
}

export default App;
