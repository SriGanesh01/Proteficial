import React from 'react';

function HeaderHome() {
    return (
        <div className="flex flex-row bg-gradient-to-b from-[#2F0046] to-[#29003E] py-3 items-center justify-between px-5">
            <div className='flex flex-row space-x-5 pt-[26px]'>
                <a href="/" className='text-white text-[22px]'>Home</a>
            </div>
            <div className='ml-auto'>
                <ol className='flex flex-row space-x-5 text-white pt-[26px] '>
                    <li>
                        <a href="/Proteficial" className='text-white text-[22px]'>Proteficial</a>
                    </li>
                    <li>
                        <a href="/Blog" className='text-white text-[22px]'>Blog</a>
                    </li>
                    <li>
                        <a href="/AboutUs" className='text-white text-[22px]'>About Us</a>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default HeaderHome;
