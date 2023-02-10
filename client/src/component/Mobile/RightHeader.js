import React from 'react'
import { Link } from 'react-router-dom'

const RightHeader = () => {
    return (
        <div className='r_header'>
            <Link className='r_link one_link' to="">Smartphones</Link>
            <Link className='r_link sec' to="">Accessories</Link>
            <Link className='r_link th' to="">New Launches</Link>
        </div>
    )
}

export default RightHeader