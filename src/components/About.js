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
                <p className=' text-xl lg:text-4xl my-10 gill text-center font-bold'>In Matt Furie's The Night Riders, the wizard character is a notable figure within the surreal and whimsical world of the story. This character is often depicted as a ghostly figure with a flowing robe and a large, pointed wizard's hat. The wizard appears during the nocturnal adventures of the frog and rat duo, contributing to the magical and mysterious ambiance of their journey through forests and other eerie landscapes.

                    <br />
                    <br />
                    This character adds a layer of fantasy and mysticism to the narrative, fitting well within Furie’s unique artistic style that combines elements of childhood wonder with a slightly dark, surreal edge. The wizard’s presence enhances the story’s dreamlike quality, making The Night Riders a rich visual experience.

                    The Night Wizard is always there, you just never notice.  He operates in the shadows, helping the crew along their journey in the story.
                </p>


                <img src={tree3} alt="" className='absolute -bottom-16 -left-10 lg:-bottom-10 lg:left-0 w-32   ' />
                <img src={tree3turned} alt="" className='absolute -bottom-20 -right-10 lg:-bottom-10 lg:right-0 w-32   ' />
            </div>
        </div>
    )
}

export default About