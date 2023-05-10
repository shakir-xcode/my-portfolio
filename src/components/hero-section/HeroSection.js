import React from 'react'
import './heroStyle.css'

function HeroSection() {

    return (
        <>
            <div className='text-2xl lg:text-4xl font-semibold flex flex-col md:gap-2'>
                <h1 className='hero-text hero1 relative w-fit '>Hello,
                    <span className="span-overlay span1"></span></h1>
                <div className='relative flex w-fit '>
                    <h1 className='hero-text hero2 w-fit '>I am&nbsp;</h1>
                    <strong className='accent-color'>Shakir</strong>
                    <span class="span-overlay span2"></span></div>
                <h1 class="write-cursor">
                    A front end developer<span class="span-cursor"></span></h1>
                <p className='text-[0.8rem] md:text-sm -mt-1 md:-mt-2 font-medium 
                text-secondary-color'>I love building interactive, digital experiences on web
                </p>
                <button className='px-7 py-3 mt-4 border border-accent rounded-sm 
                self-start font-medium text-base hover:bg-btn-hover '>
                    Let's get in touch!
                </button>
            </div>
        </>

    )
}

export default HeroSection