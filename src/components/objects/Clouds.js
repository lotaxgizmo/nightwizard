import React from 'react'
import cloud1 from "../../assets/cloud1.svg"
import cloud8 from "../../assets/cloud8.svg"
import cloud7 from "../../assets/cloud7.svg"
import cloud6 from "../../assets/cloud6.svg"
import cloud5 from "../../assets/cloud5.svg"
import cloud4 from "../../assets/cloud4.svg"
import cloud3 from "../../assets/cloud3.svg"
import cloud2 from "../../assets/cloud2.svg"

function Clouds() {
    return (
        <div className='z-[4] flex flex-col items-center justify-center relative w-full h-[170vh] lg:h-[190vh]'>
            <img src={cloud2} alt="" className='cloud2 absolute -top-3' />
            <img src={cloud1} alt="" className='cloud1 absolute left-0 -top-3' />
            <img src={cloud1} alt="" className='cloud3 absolute left-0 top-60  w-96' />
            <img src={cloud4} alt="" className='cloud4 absolute left-0 bottom-52  w-96/' />
            <img src={cloud8} alt="" className='cloud1 absolute left-0 bottom-52  w-96/' />
            <img src={cloud5} alt="" className='cloud5 absolute left-0 bottom-0  w-96D' />



            <img src={cloud2} alt="" className=' w-[2000px] max-w-none opacity-0' />
        </div>
    )
}

export default Clouds