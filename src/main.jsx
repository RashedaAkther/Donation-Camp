import React from 'react'
import ReactDOM from 'react-dom/client'
import MainLayout from './Components/MainLayout/MainLayout'
import Donation from './Components/Donation/Donation'



import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import ShowDonation from './Components/ShowDonation/ShowDonation'
const createRoots = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children:[{
        path:'/',
        element:<Home></Home>,
        loader: ()=>fetch('/donationData.json')
      },
        {
          path:'/donation',
          element:<Donation></Donation>
        },
      
        {
          path: '/show_donation/:id',
          element: <ShowDonation></ShowDonation>,
          loader: ()=>fetch('/donationData.json')
          
        }
    ]
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createRoots}/>
  </React.StrictMode>,
)
