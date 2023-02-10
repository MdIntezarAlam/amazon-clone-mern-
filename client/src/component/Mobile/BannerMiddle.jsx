import React from 'react'
import { Link } from 'react-router-dom'
import { bannerMiddlemobile } from '../../utils/constant'

const BannerMiddle = () => {
    return (
        <div className='b_middle'>
            <div className='b_flex'>
                {bannerMiddlemobile.map((data) => (
                    <Link to="/order">
                        <div className='imgd'>
                            <img src={data.img1} alt="" />
                            <button>{data.btn}</button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BannerMiddle