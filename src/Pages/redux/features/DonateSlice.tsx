import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



// Define a type for the slice state
type Tdonate={
  id:string,
  image:string,

  title:string,
  description:string,
  category:string,
  amount:string
}


// Define the initial state using that type
const initialState = {
    donations:[] as Tdonate[],
    
}

export const DonateSlice = createSlice({
  name: 'donations',

  initialState,
  reducers: {
    addTodonate:(state,action:PayloadAction<Tdonate>)=>{
      state.donations.push({...action.payload})
    },
  
  
     
     

     

     
    
  },
})


// Other code such as selectors can use the imported `RootState` type

export const {addTodonate}=DonateSlice.actions;
export default DonateSlice.reducer
