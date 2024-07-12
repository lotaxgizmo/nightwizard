import React from 'react'
import Moon from './objects/Moon'
import Clouds from './objects/Clouds'
import Mist from './objects/Mist'
import Stars from './objects/Stars'
import Mainherothings from './objects/Mainherothings'

function Hero() {
    return (
        <div className='relative flex flex-col justify-center items-center bg-[#142449. -mb-52'>
            <Mainherothings />
            <Clouds />
            <Moon />
            <Mist />
            <Stars />




        </div>
    )
}

export default Hero