import React from 'react'
import {
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
import App from '../App';
import Layout from '../Layout';
import Home from '../pages/Home';
import Product from '../pages/Home/product';
import Category from '../pages/Home/category';
import Cart from '../pages/Home/cart';
import Login from '../pages/Home/login';
import Register from '../pages/Home/register';
const RouteRoot = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/product'} element={<Product/>} />
                    <Route path='/category' element={<Category/>}/>
                    <Route path={'/cart'} element={<Cart/>}/>
                    <Route path={'/product/:id'} element={<Product/>} />
                    <Route path={'/login'} element={<Login/>} />
                    <Route path={'/register'} element={<Register/>} />

                </Routes>
            </Layout>
        </Router>
    )
}

export default RouteRoot