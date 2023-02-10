import React from 'react'
import '../../styles/mobile.css'
import LeftContainer from './LeftContainer'
import MobileHeader from './MobileHeader'
import RightContainer from './RightContainer'
import rbanner from '../../assets/rbanner.jpg'
import RightHeader from './RightHeader'
import BannerMiddle from './BannerMiddle'
import MiddleBannerTwo from './MiddleBannerTwo'
import b1 from '../../assets/b1.jpg'
import b2 from '../../assets/b2.jpg'
import b3 from '../../assets/b3.jpg'



const Mobile = () => {
    return (
        <div className='mobile'>
            <div className='mobile_header'>
                <MobileHeader />
            </div>
            <div className='mobile_container'>
                <div className='left_container'>
                    <LeftContainer />
                </div>
                <div className='right_container'>
                    <div className='right_container_back'>
                        <RightHeader />
                        <div className='rightBaner'>
                            <img src={rbanner} alt="" />
                        </div>
                        <RightContainer />
                        <RightContainer />
                        <BannerMiddle />
                        <RightContainer />
                        <RightContainer />
                    </div>
                    <MiddleBannerTwo b1={b1} b2={b2} b3={b3}/>
                </div>
            </div>
        </div>
    )
}

export default Mobile