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

                <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x6d235097beb0803dddf692e9ad1d2e455c8d1309" target="_blank" rel="noopener noreferrer">
                    <img src={dextoolscircle} alt="" className='w-[70px] lg:w-auto min-w-0 max-w-none p-2' />
                </a>

                <a href="https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0x184fc9ea0252916adb22d919275434b85ab7742c" target="_blank" rel="noopener noreferrer">
                    <img src={uniswaocircle} alt="" className='w-[70px] lg:w-auto min-w-0 max-w-none p-2' />
                </a>


            </div>
        </div>
    )
}

export default Socials