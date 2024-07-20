import React from 'react'
import howtobuy from "../assets/howtobuy.svg"
import eth from "../assets/eth.png"
import metamask from "../assets/metamask.png"
import wallet from "../assets/wallet.png"
import whizz from "../assets/whizz.png"
import tree3 from "../assets/tree3.png"
import tree1 from "../assets/tree1.png"

function Howtobuy() {
    return (
        <div className='flex flex-col items-center justify-center relative'>
            <img src={howtobuy} alt="" />


            <div className=" lg:hidden flex twi flex-col lg:flex-row justify-center items-center mx-10">
                <div className="flex flex-col w-full -mr-8 lg:mr-0 left">
                    <img src={metamask} alt="" className='w-[600px] mb-10 lg:mt-10 lg:mb-5 right-20' />
                    <img src={eth} alt="" className='w-[600px]  mb-10 lg:my-5' />
                </div>
                <div className="flex flex-col w-full -mr-8 lg:mr-0 right pb-60">
                    <img src={whizz} alt="" className='w-[600px] lg:ml-20  mb-10 lg:my-5' />
                    <img src={wallet} alt="" className='w-[600px] lg:ml-20 mb-10 lg:my-5' />

                </div>
            </div>

            <div className=" hidden lg:flex twi flex-col lg:flex-row justify-center items-center mx-10">
                <div className="flex flex-col w-full -mr-8 lg:mr-0 left">
                    <img src={eth} alt="" className='w-[600px]  mb-10 lg:my-5' />
                    <img src={wallet} alt="" className='w-[600px] lg:ml-20 mb-10 lg:my-5' />
                </div>
                <div className="flex flex-col w-full -mr-8 lg:mr-0 right pb-60">
                    <img src={metamask} alt="" className='w-[600px] mb-10 lg:mt-10 lg:mb-5 right-20' />
                    <img src={whizz} alt="" className='w-[600px] lg:ml-20  mb-10 lg:my-5' />

                </div>
            </div>

            <img src={tree1} alt="" className='absolute -left-20 bottom-0 w-52 lg:w-60' />
            <img src={tree3} alt="" className='absolute -right-32 -bottom-20 w-72 lg:w-80' />

        </div>
    )
}

export default Howtobuy