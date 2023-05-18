import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function TechCard({ img }) {
    // let img = '../images/icon.png'
    return (
        <div className='flex flex-col items-center gap-3 w-28 px-4 py-6 rounded-md bg-bg-accent'>
            <div className=' w-8'><StaticImage src='../images/icon.png' alt='icon' /></div>
            <p className='text-sm'>Teck stack</p>
        </div>
    )
}

export default TechCard