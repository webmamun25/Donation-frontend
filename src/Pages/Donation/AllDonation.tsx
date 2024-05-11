
import { Link } from 'react-router-dom'
import Container from '../../ui/Container/Container';
import { Navbar } from '../Home/Landing_page/Root_page/Header/Navbar';
import { useGetDonationsQuery } from '../redux/api/api';
type Donation= {
    id: string;
    image: string;
    title: string;
    category: string;
    amount: number;
    
  
  }
  
export const AllDonation = () => {
    
    const { data,isLoading } = useGetDonationsQuery(undefined)
   console.log(data)
  
    if(isLoading){
      return <p>Loading....</p>
    }
  return (
    <Container>
    <Navbar></Navbar>
    <div className='grid grid-cols-3 gap-20 space-y-5 mt-[50px]'>
        {
            data.map((donation:Donation)=>(
                
<div className="max-w-sm bg-white border border-gray-200 relative rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg w-full h-[200px]" src={donation.image} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{donation.title}</h6>
        </a>
        <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">{donation.category}</p>
        <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">{donation.amount}</p>
       
    </div>
    <Link  to={`/donations/${donation.id}`} className="inline-flex items-center absolute bottom-0 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View Details
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
</div>
            ))
        }

        

    </div>
  </Container>
  )
}
