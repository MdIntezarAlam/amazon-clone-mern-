import React from 'react'
import '../../styles/freq.css'
import { Link } from 'react-router-dom'
import { frequentlyRequired } from '../../utils/constant'

const FrequentlyRequired = ({ pro }) => {
    return (
        <div className='freq'>
            <div className='offer'>
                <h1 className='heading'>{pro?.offerheading}</h1>
                <Link to="/" className='freq_See'>Seee all Offers</Link>
            </div>
            <div className='freq_carasole'>
                {frequentlyRequired?.map((data) => (
                    <>
                        <div className='img_flex'>
                            <img src={pro?.singleimg?.url_1} alt="img" className='image_container_horigental' />
                            <img src={pro?.singleimg?.url_2} alt="img" className='image_container_horigental' />
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default FrequentlyRequired