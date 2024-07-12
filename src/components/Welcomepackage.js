import React from 'react'
import Welcome from './Welcome'
import About from './About'
import tree3 from "../assets/tree3.png"
import christree from "../assets/christree.svg"

function Welcomepackage() {
    return (
        <div className='z-10 flex flex-col justify-center items-center relative top pt-52 lg:pt-96'>
            <img src={christree} alt="" className='-z-[10] -top-96 absolute left-0' />
            <img src={christree} alt="" className='-z-[10] -top-40 absolute -right-60' />
            <Welcome />
            <About />

            {/* <img src={topground} alt="" className='' /> */}
        </div>
    )
}

export default Welcomepackage