import React from 'react'
import './Nav.css'

import Navigation from '../Navigation'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
    <nav style={{backgroundColor: '#687cb2',marginBottom:-20,marginTop:-20}} >
        <ul class="navbar-menu">
            <h1>poblaco</h1>
            <div className='navBar'>
            <Link to='/' style={{margin:8,color:'#fff',marginRight:30}}>Home</Link>
            <Link to='/AboutUs'style={{margin:8,color:'#fff',marginRight:30}}>AboutUs</Link>
            <Link to='/OurWork'style={{margin:8,color:'#fff',marginRight:30}}>OurWork</Link>
            <Link to='/Services'style={{margin:8,color:'#fff',marginRight:30}}>Services</Link>
            <Link to='/ContactUs'style={{margin:8,color:'#fff',marginRight:30}}>ContactUs</Link>
            </div>
        </ul>
    </nav>
    
    </>
  )
}

export default Nav