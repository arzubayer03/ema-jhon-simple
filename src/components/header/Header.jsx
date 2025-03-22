import React from 'react'
import logo from '../../assets/logo.png'
import Navbar from './Navbar'

function Header() {
    return (
    <div className='flex justify-center'>
        <img className='h-20' src={logo} alt="" />
    </div>
        
    )
}

export default Header
