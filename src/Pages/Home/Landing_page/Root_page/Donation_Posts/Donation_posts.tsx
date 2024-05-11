
import { DonationShow } from '../../../../Donation/DonationShow'
import Container from '../../../../../ui/Container/Container'
import { Link } from 'react-router-dom'

export const Donation_posts = () => {
  return (
    <Container>
      <Link to='/donations' className='flex justify-end mt-5' >
          <button className='text-[#bb2b24]   px-3 py-3 rounded-md'>View All</button>
          <svg className="rtl:rotate-180 w-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
      </Link>
        <DonationShow></DonationShow>
        
    </Container>
  )
}
