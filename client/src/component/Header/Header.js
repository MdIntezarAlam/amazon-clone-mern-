import React from 'react'
import '../../styles/header.css'
import logo from '../../assets/logo.jpg'
import SearchIcon from '@mui/icons-material/Search';
import FlagIcon from '@mui/icons-material/Flag';
import { Link } from 'react-router-dom'
import { headerOptionValue } from '../../utils/constant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <div className='container'>
      <img src={logo} alt="logo" className='amazon_img' />
      <div className='containerOption'>
        <span className='headerOptionOne'>Deliver to</span>
        <span className='headerOptiontwo'>India</span>
      </div>
      <div className='headerSearch'>
        <select className='h_option' name="cars">
          {headerOptionValue.map((data) => (
            <option value="All">{data.optionValue}</option>
          ))}
        </select>

        <input type="text" placeholder='Search here' className='searc_input' />
        <div className='h_icon'>
          <SearchIcon className='icon' />
        </div>
      </div>

      <div className='h_one'>
        <div className='h_flex'>
          <FlagIcon className='iconss' />
          <select className='f_option' name="cars">
            <option value="EN">EN</option>
            <option value="saab">Saab 95</option>
            <option value="mercedes">Mercedes SLK</option>
            <option value="audi">Audi TT</option>
          </select>
        </div>
      </div>
      <div className='h_one'>
        <span className='headerOptionfirst'>Hello, Sign in</span>
        <span className='headerOptiontwo'>Account & List </span>
      </div>
      <div className='h_one'>
        <span className='headerOptionfirst'>Returns</span>
        <span className='headerOptiontwo'>&Order</span>
      </div>
      <div className='h_ones'>
        <Link to="/cart">
          <ShoppingCartIcon className='cart' />
          <span className='headerOptiontwo'>cart</span>
        </Link>
      </div>
    </div >
  )
}

export default Header