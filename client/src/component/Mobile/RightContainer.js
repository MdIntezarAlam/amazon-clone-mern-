import React from 'react'
import { Link } from 'react-router-dom'
import { bannerMiddlemobile } from '../../utils/constant'

const MobileHeader = () => {
    return (
        <div className='right_conta'>
            <h1 className='m_heading'>Bestselling Affordable Smartphones</h1>
            <div className='imgae_verticle'>
                {bannerMiddlemobile.map((data, i) => (
                    <Link to="/order">
                        <div className='image_flex' key={i}>
                            <img src={data.img1} alt="" />
                            <button>{data.btn}</button>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default MobileHeader