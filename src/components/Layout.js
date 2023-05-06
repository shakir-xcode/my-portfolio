import React from 'react'
import Navbar from './Navbar'

function Layout({ children }) {
    return (
        <div className='relative max-w-[1670px] mx-auto overflow-hidden'>
            <Navbar />
            <div className='px-5 md:px-24'>
                {children}
            </div>
        </div>
    )
}

export default Layout