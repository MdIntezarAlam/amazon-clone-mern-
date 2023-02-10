import React, { useState } from 'react'
import '../../styles/middleBanner.css'
import { middleBanner } from '../../utils/constant'
import { Link } from 'react-router-dom'

const MiddleBanner = ({ day, detail, pro }) => {
    const [state, setState] = useState(middleBanner)

    return (
        <Link to="/mobile" className='middleBanner'>
            <div className='m_header'>
                <span className='text__'>{day}</span>
                <span className='span'>{detail}</span>
            </div>
            <div className='allContainer'>
                {state.map((data) => (
                    <div className='m_box_container'>
                        <div className='m_box_one'>
                            <img src={pro?.image?.url1_1} alt="boxone" className='box_img' />
                        </div>
                        <div className='m_box_one_bottom'>
                            <button>{pro?.btnOffer}</button><span className='time'>{data.endOffer}</span>
                        </div>
                        <span className='iphone'>price{data.price}</span>
                        <div className='m_box_one'>
                            <img src={pro?.image?.url1_2} alt="boxone" className='box_img' />
                        </div>
                        <div className='m_box_one_bottom'>
                            <button>{pro?.btnOffer}</button><span className='time'>{data.endOffer}</span>
                        </div>
                        <span className='iphone'>price{data.price}</span>
                    </div>
                ))}
            </div>
        </Link>
    )
}

export default MiddleBanner