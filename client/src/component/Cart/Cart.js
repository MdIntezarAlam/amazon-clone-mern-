import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/cart.css'

const Cart = ({ data, pro }) => {

  return (
    <>
      {data?.map((da) => (
        <Link to="/mobile" className='cartOne'>
          <div className='title' style={{ color: "#000" }}>{pro?.offerheading}</div>
          <div className='imgContainers'>
            <div className='one'>
              <div className='img_one'>
                <img src={pro?.singleimg?.url_1} alt="" className='image_one_img' />
                <span className='text_'>{pro?.smallOffer}</span>
              </div>
              <div className='img_one'>
                <img src={pro?.image?.url1_2} alt="" className='image_one_img' />
                <span className='text_'>{pro?.smallOffer}</span>
              </div>
              <div className='img_one'>
                <img src={pro?.image?.url1_3} alt="" className='image_one_img' />
                <span className='text_'>{pro?.smallOffer}</span>
              </div>
              <div className='img_one'>
                <img src={pro?.singleimg?.url_2} alt="" className='image_one_img' />
                <span className='text_'>{pro?.smallOffer}</span>
              </div>
            </div>
          </div>
          <div className='text'> See more</div>
        </Link>
      ))}
    </>
  )
}

export default Cart