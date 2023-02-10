import React from 'react'

const OrderMiddle = ({ details, visite }) => {
    return (
        <div className='o_middle'>
            <div className='o_par'>
                {details}
            </div>
            <p className='visite'>{visite}</p>
            <div className='o_ratings'>
                <span>rating</span>
                <span>  20,555 ratings </span>
                <span> 1000+ answered questions </span>
            </div>
            <div className='o_price'>
                <span className='offer'>-13%</span><span className='offerS'>₹13,999</span>
            </div>
        </div>
    )
}

export default OrderMiddle