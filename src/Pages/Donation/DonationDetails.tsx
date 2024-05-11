
import { Link, useLoaderData } from 'react-router-dom'
import Container from '../../ui/Container/Container';
import { Navbar } from '../Home/Landing_page/Root_page/Header/Navbar';
type Donation= {
  _id:string,
  id: string;
  image: string;
  title: string;
  category: string;
  amount: number;
  
}
export const DonationDetails = () => {
  const donations = useLoaderData() as Donation;
  console.log(donations)
 

  

  return (
    <Container>
      <Navbar></Navbar>
      <div className="max-w-sm mx-auto my-20 rounded overflow-hidden shadow-lg">
  <img className="w-full" src={donations.image} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{donations.title}</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
    <p className="text-gray-700 text-base">
      {donations.amount}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{donations.category}</span>
   
  </div>
  <div className='text-center'>
    <Link to="/donate" className=' bg-green-100 rounded-lg  px-3 py-3'><button > Donate Now </button></Link>
  </div>
</div>
    </Container>
  )
}
