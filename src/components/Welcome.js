import React from 'react'
import sittree from "../assets/sittree.svg"
import welcome from "../assets/welcome.svg"

function Welcome() {
    return (
        <div className=' z-[2] flex flex-col items-center justify-center relative'>
            <img src={welcome} alt="" />
            <img src={sittree} alt="" className='self-start lg:-mt-96' />
        </div>
    )
}

export default Welcome