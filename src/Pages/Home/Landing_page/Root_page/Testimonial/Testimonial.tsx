import  { useEffect, useState } from 'react'
import Container from '../../../../../ui/Container/Container'
type Testimoni={
    author:string;
    avatar:string;
    comment:string
}

export const Testimonial = () => {
    const [testimonials,setTestimonials]=useState<Testimoni[]>([])
    useEffect(() => {
      fetch('http://localhost:4200/testimonials')
      .then(res=>res.json())
      .then(data=>
            setTestimonials(data)
      )
    
      
    }, [])
    

  return (
    <Container>
        <div >
        <h3 className='font-semibold text-center text-4xl mb-2 text-orange-600'>Testimonials</h3>
        {
            testimonials.map(testi=>(
                <div className="w-full max-w-4xl p-4 bg-white border mx-auto border-gray-200 rounded-lg  shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={testi.avatar} alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {testi.author}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                           {testi.comment}
                        </p>
                    </div>
                    
                </div>
            </li>
           
           
           
           
        </ul>
   </div>
</div>
            ))
        }
        </div>

       



    </Container>
  )
}
