import logo from './logo.svg';
import logo1 from './logo192.png'
import React from 'react'
import './header.css'

function BodySection(){
    return(
        <div className="container">
            <h2>Fun facts about React</h2>
            <ul>
                <li className = "p-10px">Was First released in 2013</li>
                <li className = "p-10px">Was originally created by Jordan Walke</li>
                <li className = "p-10px">Can Change data without reloading the page</li>
                <li className = "p-10px">It is fast</li>
            </ul>
        </div>
    )
}


function Header(){
    const home = "Home";
    const about = "About";
    const contact = "Contact Us";
    return(
        <div>
            <nav className="nav">
                <img src={logo1} height={60} className='logo-img' />
                <ul className="nav-flex">
                    <li>{home}</li>
                    <li>{about}</li>
                    <li>{contact}</li>
                </ul>
            </nav>
            {/* <BodySection /> */}
        </div>
    )
}

export default Header;