import { createApi } from '@reduxjs/toolkit/query/react'

import {  fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200/' }),
  endpoints: (builder) => ({
    getDonations:builder.query({
        query:()=>({
          url:"donation",
          method:"GET",

        })
      
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDonationsQuery } = baseApi