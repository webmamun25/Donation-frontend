
import Container from '../../ui/Container/Container'
import { useAppSelector } from '../redux/hook';


export const LatestDonation = () => {
    const {donations}=useAppSelector((state)=>state.donations)
    
    return (
    <Container>
        {donations.length>0 ? <h1 className='text-center bg-slate-500 text-white mt-5 rounded-md'>Latest Donation </h1>:""}
        {
                donations.map(don=>(
                  <div>
    
<div className="max-w-full mx-auto mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         

    <a href="#">
        <img className="rounded-t-lg mx-auto h-[400px] w-1/2" src={don.image} alt="" />
    </a>
    <div className="py-2 mx-auto w-1/2">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{don.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{don.description}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {don.amount}
          
        </a>
    </div>
</div>

                  </div>
                  
                ))
              }
    </Container>
  )
}
