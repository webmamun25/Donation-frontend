
import {
  createBrowserRouter,
 
} from "react-router-dom";
import App from "../App";

import { Donation_posts } from "../Pages/Home/Landing_page/Root_page/Donation_Posts/Donation_posts";
import { AllDonation } from "../Pages/Donation/AllDonation";
import { DonationDetails } from "../Pages/Donation/DonationDetails";
import { DonateNow } from "../Pages/Donation/DonateNow";
import { Login } from "../Pages/Registration/Login";
import { Register } from "../Pages/Registration/Register";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
          index:true,
          element:<Donation_posts></Donation_posts>
        },
       
      ]
    },
    {
      path: "donations",
      element: <AllDonation></AllDonation>,
      
    },
    {
      path:"donations/:id",
      element:<DonationDetails></DonationDetails>,
      loader:({params})=>fetch(`http://localhost:4200/donation/${params.id}`)
    },
    {
      path:"/donate",
      element:<DonateNow></DonateNow>
      
    },
    {
      path:"/Signin",
      element:<Login></Login>
      
    },
    {
      path:"/Signup",
      element:<Register></Register>
      
    },
  ]);