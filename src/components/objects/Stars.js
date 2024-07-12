import React from 'react'
import stars from "../../assets/stars.svg"

function Stars() {
    return (
        <div className='fixed top-0 z-[1]'>
            <img src={stars} alt="" />
        </div>
    )
}

export default Stars