import React from 'react';
import './App.css';
import NavBar from './components/index';
import { BrowserRouter as Router, Routes, Route}
      from 'react-router-dom';
import Home from './pages/home';
import {Blog1,Blog2} from './pages/blogs';
import Footer from "./footer.js";
import {Intro, Part2, Part3, Part4, Conclusion } from "./pages/choice-of-solitude";
import {BlogPage} from "./pages/blogmain";
import { ScrollToTop } from './components/ScrolltoTop';



function App() {
  return (
  <Router>
    <ScrollToTop />
   <NavBar />
   <div className="page-holder">

   <Routes>
     <Route path='/1301-blog' element={<Home />} />
     <Route path='/1301-blog/home' exact element={<Home />} />
     <Route path='/1301-blog/blogs' element={<BlogPage/>} />
     <Route path='/1301-blog/overloaded-to-optimistic' element={<Blog1/>} />
     <Route path='/1301-blog/what-makes-a-writer' element={<Blog2/>}/>
     <Route path='/1301-blog/the-choice-of-solitude-over-socialization-intro' element={<Intro/>}/>
     <Route path='/1301-blog/the-choice-of-solitude-over-socialization-introvertedness-in-active-environments' element={<Part2 />}/>
     <Route path='/1301-blog/the-choice-of-solitude-over-socialization-solitude-and-productivity' element={<Part3 />} />
     <Route path='/1301-blog/the-choice-of-solitude-over-socialization-introverts-in-the-workplace' element={<Part4 />} />
     <Route path='/1301-blog/the-choice-of-solitude-over-socialization-conclusion' element={<Conclusion />} />
   </Routes>
      <Footer />
   </div>
   </Router>
  );
}

export default App;
