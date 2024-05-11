import React from 'react'
import Container from '../../ui/Container/Container'

export const About = () => {
  return (
    <Container>
        <div className='flex justify-between gap-10 mt-10'>
            <div>
            <img src="https://i.postimg.cc/5t0gHtG4/begging-bridge-with-person-who-handed-bread.jpg" className='max-w-full rounded-md' alt="" />

            </div>
        
       
        <div className='space-y-4 flex flex-col justify-center'>
            <h3 className='font-semibold text-orange-600'>About Us</h3>
            <h1 className='font-bold tracking-wide '>Your support always boost us.</h1>
            <p>  We understand that every contribution, no matter how small, can create meaningful change. That's why we are committed to transparency and accountability in everything we do. Your support allows us to.</p>
        </div>
        </div>
    </Container>
  )
}
