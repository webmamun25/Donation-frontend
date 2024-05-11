import React from 'react'
import donationVideo from '../../../../../../public/Donation_1280x720.mp4'
import Container from '../../../../../ui/Container/Container'
export const Hero_section = () => {
  return (
    <Container >
    <video className='mx-auto ' width="1250" height="600" controls autoPlay>
    <source src={donationVideo} type="video/mp4"/>
  
    </video>
    </Container>
   
  )
}
