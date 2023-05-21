import React from 'react'
// import hero to data
import { heroData } from '../Data';
// import components
import Header from '../component/Header'



const Hero = () => {
  
    const { title,subTitle,btnText,image  } = heroData;
    return (
    <section className="h-screen py-12">
      <Header/>
        <div className='container mx-auto  h-full relative'>
          <div className='flex flex-col xl:flex-row items-center h-full md:py-24'>
            {/* text */}
            <div className='text-center xl:text-left xl:absolute'>
              <h1 className='h1 xl:max-w-[700px] mb-6 lg:mb-12' data-aos='fade-down' data-aot-delay='400'>{title}</h1>
              <p className='xl:max-w-[380px] mb-6 lg:mb-12' data-aos='fade-down' data-aot-delay='500'>{subTitle}</p>
              <button className='btn btn-primary mb-8 xl:mb-0' data-aos='fade-down' data-aot-delay='600'>{btnText}</button>
            </div>
            <div className='xl:absolute xl:-right-12 xl:bottom-16' data-aos='fade-up' data-aot-delay='700'>
              <img src={image} alt=""/>
            </div>
          </div>
       </div>
    </section>
    );
}
export default Hero