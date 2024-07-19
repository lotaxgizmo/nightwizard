import React, { useState } from 'react';
import bgcontract from "../../assets/bgcontract.png";
import copy from "../../assets/copy.png";

// the contract address is 0x0EbB9d648CE65343C16327A74D2a07666C2E1d66

function Contract() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('0x0EbB9d648CE65343C16327A74D2a07666C2E1d66')
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <div className='relative flex mb-14 justify-center items-center text-white'>
            <img src={bgcontract} alt="Background" />
            <p className='text-sm lg:text-3xl absolute'>0x0EbB9d648CE65343C16327A74D2a07666C2E1d66</p>
            <img
                src={copy}
                alt="Copy"
                className='absolute cursor-pointer -bottom-12 -right-0 lg:-right-20 w-32 lg:w-auto'
                onClick={handleCopy}
            />
            {copied && (
                <div className='absolute bottom-0 right-0 bg-black text-white p-2 rounded'>
                    Copied!
                </div>
            )}
        </div>
    );
}

export default Contract;
