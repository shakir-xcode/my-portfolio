import React from 'react'
import Navbar from './Navbar'
import "./animation/heroAnimation.css"

function Layout({ children }) {
    return (
        <div className=' relative max-w-[1670px] mx-auto overflow-hidden'>
            <div id="animation-div">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </div>
            <Navbar />
            <div className='px-5 md:px-24'>
                {children}
            </div>
        </div>
    )
}

export default Layout