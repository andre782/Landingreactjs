import React from 'react'
// import component
import TestimonialSlider from '../component/TestimonialSlider'

const Testimonials = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='bg-accent-primary min-h-[600px]'>
          <div className='flex flex-col justify-center px-2 xl:px-0 h-[800px]'>
            <h2 className='h2 text-white text-center mb-[80px]'>
                Review Pelanggan
            </h2>
            <TestimonialSlider/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

