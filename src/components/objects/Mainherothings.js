import React from 'react'
import hero from "../../assets/hero.png"
import herotop from "../../assets/herotop.png"
import telegrambtn from "../../assets/telegrambtn.svg"
import buynow from "../../assets/buynow.svg"
import logomain from "../../assets/logomain.svg"
import Contract from './Contract'
import Socials from './Socials'

function Mainherothings() {
    return (
        <div className='z-20 mt-10 lg:mt-40 flex flex-col justify-center items-center lg:-mb-96 absolute top-0'>


            <div className="hero flex flex-col justify-center items-center">
                <img src={herotop} alt="" className='w-8/12 lg:w-3/12' />
                <img src={hero} alt="" className='w-11/12 lg:w-10/12' />
            </div>

            <div className="btn flex flex-col lg:flex-row justify-between items-center lg:w-9/12 border-2d lg:-mt-60">
                <img src={logomain} alt="" className='lg:hidden flex w-32 lg:w-60' />
                <a href="https://app.uniswap.org/explore/tokens/ethereum/0x0ebb9d648ce65343c16327a74d2a07666c2e1d66" target="_blank" rel="noopener noreferrer">
                    <img src={buynow} alt="" className='w-96 p-3' />
                </a>
                <img src={logomain} alt="" className='hidden lg:flex' />
                <a href="https://t.me/nightwizard777" target="_blank" rel="noopener noreferrer">
                    <img src={telegrambtn} alt="" className='w-96 p-3' />
                </a>
            </div>
            <Contract />
            <Socials />
        </div>
    )
}

export default Mainherothings