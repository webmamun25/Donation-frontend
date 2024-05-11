import  { FormEvent } from 'react';
import Container from '../../ui/Container/Container';
import { useAppDispatch } from '../redux/hook';
import { addTodonate } from '../redux/features/DonateSlice';
import { Navbar } from '../Home/Landing_page/Root_page/Header/Navbar';


export const DonateNow = () => {
    
    const dispatch=useAppDispatch()
    const handleDonate = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const target = e.target as typeof e.target & {
            id: { value: string };
            image: { value: string };
            title: { value: string };
            description: { value: string };
            category: { value: string };
            amount: { value: string };
          };
        
        const id=Math.random().toString(36).substring(2,7)
        const image = target.image.value;
        const title = target.title.value;
        const description = target.description.value;
        const category = target.category.value;
        const amount = target.amount.value;
        console.log();
        const DonateDetails={
           id, image ,title, description, category, amount
        }
        fetch('http://localhost:4200/donation',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body:(JSON.stringify(DonateDetails))
        })
        .then(res=>res.json())
        .then(data=>{
            
            if(data.insertedId){
                alert("Data inserted successfully")
                form.reset()
              }
    })
        dispatch(addTodonate(DonateDetails))



    };

    return (
        <Container>
            <Navbar></Navbar>
            <form onSubmit={handleDonate} className="max-w-sm mx-auto mt-[100px]">
                <div className="mb-5">
                    <label htmlFor="image-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                    <input type="text" id="image-input" name='image' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="title-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="text" id="title-input" name='title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="description-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <input type="text" id="description-input" name='description' className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="category-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                    <input type="text" id="category-input" name='category' className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="amount-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                    <input type="text" id="amount-input" name='amount' className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className='flex flex-row justify-end'>
                    <button className='px-3 py-3 mt-3 rounded-md bg-red-200' type='submit'>Donate</button>
                </div>
            </form>
        </Container>
    );
};