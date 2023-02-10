import React from 'react'
import '../../styles/navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className='navgation'>
            <div className='navgation_container'>
                <Link to="/">All</Link>
                <Link to="/mobile">Mobiles </Link>
                <Link to="/mobile">Amazon Min Tv</Link>
                <Link to="/mobile">Best Sellers</Link>
                <Link to="/mobile">Sell</Link>
                <Link to="/mobile">Customer Service </Link>
                <Link to="/mobile">Today's Deals </Link>
                <Link to="/mobile">Electronics</Link>
                <Link to="/mobile">Prime</Link>
                <Link to="/mobile">Amazon Pay</Link>
                <Link to="/mobile">Fashion</Link>
                <Link to="/mobile">Home & Kitechen</Link>
            </div>
            <div className='navi_right'>
                <Link to="/mobile">Beauty</Link>
                <Link to="/mobile">Fashion</Link>
                <Link to="/mobile">Home & Kitechen </Link>
                <Link to="/signup">Sign Up </Link>
                <Link to="/signin">Sign In </Link>
            </div>
        </div>
    )
}

export default Navigation