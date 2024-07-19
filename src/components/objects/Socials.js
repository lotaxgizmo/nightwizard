import React from 'react'
import plank from "../../assets/plank.png"
import dextoolscircle from "../../assets/dextoolscircle.svg"
import telegramcircle from "../../assets/telegramcircle.svg"
import twittercircle from "../../assets/twittercircle.svg"
import uniswaocircle from "../../assets/uniswaocircle.svg"

function Socials() {
    return (
        <div className='flex flex-col items-center justify-center relative'>

            <img src={plank} alt="" />

            <div className="socials flex justify-center items-center flex-row absolute">
                <a href="https://t.me/nightwizard777" target="_blank" rel="noopener noreferrer">
                    <img src={telegramcircle} alt="" className='w-[70px] lg:w-auto min-w-0 max-w-none p-2' />
                </a>

                <a href="https://x.com/nightwizard777" target="_blank" rel="noopener noreferrer">
                    <img src={twittercircle} alt="" className='w-[70px] lg:w-auto min-w-0 max-w-none p-2' />
                </a>

                <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x5a39b6d7b4a71bd4fb5481fb6f2b615e56919d4c?t=1721352562588" target="_blank" rel="noopener noreferrer">
                    <img src={dextoolscircle} alt="" className='w-[70px] lg:w-auto min-w-0 max-w-none p-2' />
                </a>

                <a href="https://app.uniswap.org/explore/tokens/ethereum/0x0ebb9d648ce65343c16327a74d2a07666c2e1d66" target="_blank" rel="noopener noreferrer">
                    <img src={uniswaocircle} alt="" className='w-[70px] lg:w-auto min-w-0 max-w-none p-2' />
                </a>


            </div>
        </div>
    )
}

export default Socials