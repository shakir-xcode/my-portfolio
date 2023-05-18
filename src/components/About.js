import React from 'react'
import TechCard from './TechCard'
// import icon from '../images/icon.png'
import { skills } from '../info'

function About() {
    return (
        <section className='flex flex-col sm:flex-row gap-4 border'>
            <div className='flex flex-col gap-8 items-center   border '>
                <h1 className='font-bold text-3xl'><span className='text-accent'>&lt;</span>About Me<span className='text-accent'>&gt;</span></h1>
                <p>this is something about me. why is this not working, again  </p>
                <p>plx  again</p>
            </div>

            <div className='flex flex-col gap-8 items-center border '>
                <h1 className='font-bold text-3xl'><span className='text-accent'>&lt;</span>BBTechniqalSkills<span className='text-accent'>&gt;</span></h1>
                <div className='flex gap-3 flex-wrap justify-center'>
                    {skills.map(skill => <TechCard key={skill.id} img={'../images/icon.png'} />)}
                </div>

            </div>
        </section>
    )
}

export default About