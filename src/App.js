import React from 'react'

import { Navbar, Sidebar, Footer } from './components'
import {Home , About , Cart , Error , Checkout , Products, SingleProduct} from "./pages"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/products",
    element: <Products/>,
    children:[
      {
        path:":id",
        element:<SingleProduct />
      }
    ]
  },
  {
    path: "/checkout",
    element: <Checkout/>
  },
]);

function App() {
  return <div>
  <Navbar />
  <Sidebar />
  <RouterProvider router={router} />
  <Footer/>
  </div>
}

export default App
