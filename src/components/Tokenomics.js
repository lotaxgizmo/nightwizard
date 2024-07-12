import React from 'react'
import tokenomics from "../assets/tokenomics.svg"
import tax from "../assets/tax.png"
import supply from "../assets/supply.png"
import launch from "../assets/launch.png"
import boxy from "../assets/boxy.png"

import toprightcave from "../assets/toprightcave.svg"
import botleftcave from "../assets/botleftcave.svg"
import botrightcave from "../assets/botrightcave.svg"
import midbotcave from "../assets/midbotcave.svg"
import midcave from "../assets/midcave.svg"
import midleftcave from "../assets/midleftcave.svg"
import midrighttopcave from "../assets/midrighttopcave.svg"

function Tokenomics() {
    return (
        <div className='flex flex-col items-center justify-center relative mb-20'>
            <img src={tokenomics} alt="" />


            <div className="box bg-black lg:bg-[#00000000] relative image-div lg:p-32 w-11/12 rounded-3xl lg:w-10/12 lg:h-[800px] flex flex-col justify-start lg:justify-center items-center overflow-hidden">
                {/* <img src={boxy} alt="" /> */}


                <img src={toprightcave} alt="" className='hidden lg:flex absolute w-40 top-40 right-20' />
                <img src={botleftcave} alt="" className='absolute w-16 bottom-28 left-10' />
                <img src={midbotcave} alt="" className='absolute w-20 bottom-28 ldeft-10' />
                <img src={botrightcave} alt="" className='absolute w-20 bottom-28 right-10' />
                <img src={midleftcave} alt="" className='hidden lg:flex absolute w-40 dtop-28 left-10' />
                <img src={midcave} alt="" className='absolute w-20' />
                <img src={midrighttopcave} alt="" className=' absolute w-20 top-28 right-10' />


                <img src={supply} alt="" className='w-[900px]  self-start -rotate-12 mt-20 lg:mt-0' />
                <div className="sides flex flex-col lg:flex-row self-start">
                    <img src={tax} alt="" className='w-[450px]  self-start mt-10 -rotate-12' />
                    <img src={launch} alt="" className='w-[450px]  self-start mt-10 -rotate-12 mb-20 lg:mb-0' />
                </div>


            </div>
        </div>
    )
}

export default Tokenomics