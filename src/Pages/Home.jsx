import  Slider  from '../Components/Slider'
import React from 'react'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Product from '../Components/ProductCart'
import  Category  from '../Components/Categories'
import Products from '../Components/Products'
import { categories } from "../data";
import { brands } from "../data";
import { order } from "../data";
import Footer from '../Components/Footer'


const Home = () => {
    return (
        <div>
            <Announcement></Announcement>
            <Navbar></Navbar>
            <Slider></Slider>
            <Category data={categories} title="shop by Category"  border="1px solid red" radius="0%" txt={"SHOP NOW"} ></Category>
            <Products></Products>
            <Category data={brands} title="shop by brands"  border="1.5px solid" radius="0%" txt={"all products"} ></Category>
            <Category data={order} title="Pre-Owned Top Sellers"  border="none" radius="30%" txt={"pre-order"} ></Category>
               <Footer/>


        </div>
    )
}

export default Home
