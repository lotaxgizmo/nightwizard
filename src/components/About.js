import React from 'react'
import bglilgreen from "../assets/bglilgreen.svg"
import wizbtn from "../assets/wizbtn.svg"
import mushroom2 from "../assets/mushroom2.svg"
import tree3 from "../assets/tree3.png"
import tree3turned from "../assets/tree3turned.png"

function About() {
    return (
        <div className='flex flex-col items-center justify-center relative px-4 py-52'>


            <img src={mushroom2} alt="" className='absolute top-0 lg:-top-0 z-50   ' />
            <div className="rounded-3xl overflow-clip px-4 pt-10  lg:p-10 text-white bg-[#286566] relative flex flex-col justify-center items-center lg:w-7/12 border-2 border-black">
                <img src={wizbtn} alt="" className='lg:mt-20' />
                <p className=' text-xl lg:text-4xl my-10 gill text-center font-bold'>Lorem ipsum dolor amet Lorem ipsum dolo Lorem ipsum dolor amet Lorem ipsum dolo Lorem ipsum dolor amet Lorem ipsum dolo Lorem ipsum dolor amet Lorem ipsum dolo Lorem ipsum dolor amet Lorem ipsum dolo Lorem ipsum dolor amet</p>


                <img src={tree3} alt="" className='absolute -bottom-16 -left-10 lg:-bottom-10 lg:left-0 w-32   ' />
                <img src={tree3turned} alt="" className='absolute -bottom-20 -right-10 lg:-bottom-10 lg:right-0 w-32   ' />
            </div>
        </div>
    )
}

export default About