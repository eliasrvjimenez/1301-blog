import React from 'react';
import faceimg from './faceimg.png'
const Home = () => {
 return (
  <div className= "page-item">
       <div className="centerimg"><img className="smallerimg"src={faceimg}></img></div>
  <br />
     <h1 className="header-properties"> Welcome to Elias' Personal Narrative Blog! </h1>
      <p> <em>Elias Vera-Jimenez (He/Him)</em> is a first-year College of Liberal 
  arts student attending the University of Minnesota.  He is planning on
  majoring in Computer Science, although he does not know whether he will
  be doing it through the College of Liberal Arts or the College of 
  Science & Engineering. He plans on getting a Job either in 
  Cybersecurity or Software development, and enjoys hanging out with 
  friends, listening to music, and improving his programming skills 
  in his free time.
  </p>
     </div>
 );
};

export default Home;


