// import logo from './logo.svg';
import logo1 from '../logo192.png'
import React from 'react'
import '../header.css'
import {Link} from 'react-router-dom'


function Header(){
    const home = "Home";
    const about = "About";
    const contact = "Contact Us";
    return(
        <div>
            <nav className="nav fixed-top">
                <img src={logo1} height={60} className='logo-img' />
                <ul className="nav-flex">
                    <li className='nav-item'>
                        <Link className='nav-link text-white' to='/'>Card</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link text-white' to='/todo'>ToDo</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link text-white' to='/form'>Form</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;