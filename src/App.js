import React from 'react';
// import animate scroll
import Aos from 'aos';
import 'aos/dist/aos.css'


// import component
import About from './component/About'
import Hero from './component/Hero'
import Feature from './component/Feature'
import Testimonial from'./component/Testimonials'
import ClaSection from './component/ClaSection'
import Footer from './component/Footer'
import Ctsection from './component/Ctsection';


const App=()=> {
//aos initial
  Aos.init({
    duration: 1800,
    offset: 0,

  })


  return (
    <body className='overflow-hidden'>
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <Feature/>
      <Testimonial/>
      <ClaSection/>
      <Ctsection/>
      <Footer/>
    </div>
    </body>
  );
}

export default App;
