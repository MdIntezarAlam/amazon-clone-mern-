import React from 'react'
import '../../styles/cartOne.css'

const CartOne = ({ pro }) => {
    return (
        <div className='cartOne'>
            <div className='title'>{pro?.offerheading}</div>
            <div className='imgContainer'>
                <img src={pro?.bannerimg?.url} alt="bannerimg" />
            </div>
            <div className='text'> See more</div>
        </div>
    )
}

export default CartOne