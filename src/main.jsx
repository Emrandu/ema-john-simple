import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/shop/Shop';
import Home from './component/Layout/Home';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';
import Checkout from './component/Checkout/Checkout';
import SignUp from './component/SignUp/SignUp';
import AuthProviders from './component/Providers/AuthProviders';
import PrivateRoute from './component/routes/PrivateRoute';

const router = createBrowserRouter([ 
    {
      path: '/',
      element: <Home></Home>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>
        },
        {
          path: 'orders',
          element: <Orders></Orders>,
          loader: cartProductsLoader
        },
        {
          path: 'inventory',
          element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path: 'checkout',
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProviders>
      <RouterProvider router={router} />
      </AuthProviders>
  </React.StrictMode>,
)
