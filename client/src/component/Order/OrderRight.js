import React from 'react'

const OrderRight = ({details}) => {
  return (
    <>
      <div className='content'>{details}</div>
      <div className='right_'>
        <button>Add To  Cart</button>
        <button>Buy Now</button>
      </div>
    </>
  )
}

export default OrderRight