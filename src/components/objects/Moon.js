import React from 'react'
import mainmoon from "../../assets/mainmoon.svg"
import moonglow from "../../assets/moonglow.svg"

function Moon() {
    return (
        <div className='z-10 fixed top-0 flex justify-center items-center mt-20  slow-bob'>
            <img src={mainmoon} alt="" className='z-10 w-72 lg:w-[601px] slow-rotate dopacity-10' />
            <img src={moonglow} alt="" className='w-72 lg:w-[1101px] max-w-none animate-pulse absolute' />
        </div>
    )
}

export default Moon