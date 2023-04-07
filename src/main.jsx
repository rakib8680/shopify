import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import './index.css'
import Admin from './components/Admin'
import Orders from './components/Orders'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Admin></Admin>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tshirt.json')
      },
      {
        path: 'orders',
        element: <Orders></Orders>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
