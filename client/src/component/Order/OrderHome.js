import React from 'react'
import '../../styles/order.css'
import o1 from '../../assets/o1.jpg'
import MobileHeader from '../Mobile/MobileHeader'
import OrderMiddle from './OrderMiddle'
import OrderRight from './OrderRight'


const OrderHome = () => {
    return (
        <div className='order_home'>
            <div className='mobile_header'>
                <MobileHeader />
            </div>
            <div className='h_container'>
                <div className='leftPart'>
                    <img src={o1} alt="" />
                </div>
                <div className='middlePart'>
                    <OrderMiddle
                        details={"Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus"}
                        visite={"Visit the IQOO store"}
                    />
                </div>
                <div className='rightPart'>
                    <OrderRight
                        details={"Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus"}
                    />
                </div>
            </div>
        </div>
    )
}

export default OrderHome