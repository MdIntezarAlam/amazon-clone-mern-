import React from 'react'
import { Link } from 'react-router-dom'

const LeftContainer = () => {
    return (

        <React.Fragment>
            <h4 className='cate'>Category</h4>
            <h5 className='categ'>Electronics</h5>
            <div className='moble_acc'>
                <h1 className='cate'>Mobile Accessories</h1>
                <Link to="/" className='link'>Mobile Accessories</Link>
                <Link to="/" className='link'>Mobile Broadband Devices </Link>
                <Link to="/" className='link'>SIM Cards </Link>
                <Link to="/" className='link'>Smartphones & Basic </Link>
                <Link to="/" className='link'>Mobiles </Link>
                <Link to="/" className='link'>Smartwatches </Link>
            </div>
            <h4 className='amz'>Made for Amazon Brand</h4>
            <input type="checkbox" className='check_box' value="in " />Made fror Amazon
            <h4 className='amz'>Amazon Prime</h4>
            <input type="checkbox" className='check_box' value="in " />Prime
            <h4 className='amz'>Pay on Delivery</h4>
            <input type="checkbox" className='check_box' value="in " />Eligible for Pay on Delivery
            <h1 className='amz'>Brands </h1>
            <div className='allInput_checkbox'>
                <label>
                    <input type="checkbox" value="OnePlus" />Cocoblu Retail
                </label>
                <label>
                    <input type="checkbox" value="Cocoblu RetailPlus" />Cocoblu Retail
                </label>
                <label>
                    <input type="checkbox" value="Cocoblu RetailPlus" />Cocoblu Retail
                </label>
                <label>
                    <input type="checkbox" value="Cocoblu RetailPlus" />Cocoblu Retail
                </label>
                <label>
                    <input type="checkbox" value="Cocoblu RetailPlus" />Cocoblu Retail
                </label>
            </div>
            <h1 className='amz'>Seller </h1>

            <div className='allInput_checkbox'>
                <label>
                    <input type="checkbox" value="Cocoblu RetailPlus" />Cocoblu Retail
                </label>
                <label>
                    <input type="checkbox" value="Cocoblu RetailPlus" />Cocoblu Retail
                </label>
                <label>
                    <input type="checkbox" value="Cocoblu RetailPlus" />Cocoblu Retail
                </label>
                <label>
                    <input type="checkbox" value="Cocoblu RetailPlus" />Cocoblu Retail
                </label>
                <label>
                    <input type="checkbox" value="Cocoblu RetailPlus" />Cocoblu Retail
                </label>
            </div>
        </React.Fragment>
    )
}

export default LeftContainer