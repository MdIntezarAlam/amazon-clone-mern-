import React, { useEffect, useState } from 'react'
import '../../styles/home.css'
import CartOne from '../Cart/CartOne'
import Cart from '../Cart/Cart'
import box4_4 from '../../assets/box4_4.jpg'
import MiddleBanner from './MiddleBanner'
import FrequentlyRequired from '../Cart/FrequentlyRequired'
import { homeData } from '../../utils/constant'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
    const [product, setProduct] = useState(homeData)
    const [pro, setPro] = useState()

    const fetchProduct = async () => {
        try {
            const responce = await axios.get("/api/getproduct")
            setPro(responce.data.product[0])
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <div className='home'>
            <div className='banner'></div>
            <div className='cart_container'>
                <Link to="/mobile">
                    <CartOne pro={pro} />
                </Link>
                <Cart 
                data={product}
                pro={pro} />
                <MiddleBanner
                    pro={pro}
                    day="Today's Deals"
                    detail="See all deals"
                />
                <FrequentlyRequired pro={pro} />
                <FrequentlyRequired pro={pro} />
                <CartOne pro={pro} />
                <Cart 
                data={product}
                pro={pro} />
            </div>
        </div>

    )
}

export default Home