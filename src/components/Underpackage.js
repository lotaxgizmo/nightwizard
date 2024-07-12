import React from 'react'
import Howtobuy from './Howtobuy'
import Tokenomics from './Tokenomics'
import Footer from './Footer'

function Underpackage() {
    return (
        <div className='relative z-20 under pt-52 lg:pt-96 -mt-60'>
            <Howtobuy />
            <Tokenomics />
            <Footer />
        </div>
    )
}

export default Underpackage