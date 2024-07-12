import React from 'react'
import footerlogo from "../assets/footerlogo.png"
import telegram from "../assets/telegram.svg"
import twitter from "../assets/twitter.svg"

function Footer() {
    return (
        <>
            <div className='flex items-center justify-between text-white py-14 lg:p-14 flex-col lg:flex-row relative bg-black/70'>
                <img src={footerlogo} alt="" />

                <div className="links flex flex-col lg:flex-row justify-center items-center">
                    <a href="about" className='p-2 text-2xl'>About</a>
                    <a href="tokenomics" className='p-2 text-2xl'>Tokenomics</a>
                    <a href="community" className='p-2 text-2xl'>Community</a>
                </div>

                <div className="socials flex flex-row">
                    <a href="https://t.me/nightwizard777" target="_blank" rel="noopener noreferrer">
                        <img src={telegram} alt="" className='p-2' />
                    </a>
                    <a href="https://x.com/nightwizard777" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="" className='p-2' />
                    </a>


                </div>
            </div>

            <div className='flex items-center justify-center text-white py-2 lg:p-2 flex-col lg:flex-row relative bg-black'>

                <p className='p-2 text-2xl text-center'>© 2024  NIGHT WIZARD ALL RIGHT RESERVED</p>

            </div>
        </>
    )
}

export default Footer