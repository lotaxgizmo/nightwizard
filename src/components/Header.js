import React from 'react'
import header from "../assets/header.svg"
import boxtg from "../assets/boxtg.svg"
import boxx from "../assets/boxx.svg"
import logomain from "../assets/logomain.svg"

function Header() {
    return (
        <div className='flex flex-row items-center justify-center relative z-50 w-full mt-10 pt-5 lg:pt-0 text-white'>




            <img src={header} alt="" className='w-[1000px] hidden lg:flex' />
            <div className="things flex items-center justify-between absolute bg-[#276665] lg:bg-[#27666500] rounded-2xl px-1 lg:px-0">
                <img src={logomain} alt="" className='w-10' />
                <div className=" mx-20 hidden lg:flex links  flex-col lg:flex-row justify-center items-center">
                    <a href="home" className='p-2 text-4xl'>Home</a>
                    <a href="about" className='p-2 text-4xl'>About</a>
                    <a href="tokenomics" className='p-2 text-4xl'>Tokenomics</a>
                </div>

                <div className="btn flex flex-row justify-center items-center w-full">
                    <a href="https://t.me/nightwizard777" target="_blank" rel="noopener noreferrer">
                        <img src={boxtg} alt="" className='w-14 m-1' />
                    </a>
                    <a href="https://x.com/nightwizard777" target="_blank" rel="noopener noreferrer">
                        <img src={boxx} alt="" className='w-14 m-1' />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Header