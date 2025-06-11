import React from 'react';
import HomePage from '../pages/client/HomePage';
import Category from '../pages/client/Category';
import Product from '../pages/client/Products';
import Cart from '../pages/client/Cart';
import Checkout from '../pages/client/Checkout';
import DetailProduct from '../pages/client/DetailProduct';
import About from '../pages/client/About';
import Orders from '../pages/client/Orders';

const clientRoutes = [
    //common rout
    { index: true, element: <HomePage /> },
    { path: 'about', element: <About /> },

    //product & category routes
    { path: 'products', element: <Product /> },
    { path: 'products/:id', element: <DetailProduct /> },
    { path: 'categories', element: <Category /> },

    //user routes
    { path: 'cart', element: <Cart /> },
    { path: 'checkout', element: <Checkout /> },
    { path: 'orders', element: <Orders /> },

    //blog routes

]

export default clientRoutes