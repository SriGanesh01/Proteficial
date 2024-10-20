import React from 'react';
import dark_mode_header_line from '../assets/dark_mode_header_line.png';

function Header() {
    return (
        <>
            <div className='flex flex-col bg-gradient-to-b from-[#2F0046] to-[#29003E]'>
                <div className=" py-3 justify-between px-5 flex flex-row">
                    <div className='flex flex-row space-x-5 pt-[26px]'>
                        <a href="/" className='text-white text-[22px]'>Home</a>
                    </div>
                    <div className='ml-auto'>
                        <ol className='flex flex-row space-x-5 text-white pt-[26px]'>
                            <li>
                                <button className='bg-black px-3 py-1 w-36 rounded-3xl bg-gradient-to-tr from-[#0082d3] via-[#9335b6] to-[#e2008f] flex justify-center items-center text-center'>
                                    <a href="/Proteficial" className="text-white text-[22px] flex justify-center items-center text-center font-['Actor']">Proteficial</a>
                                </button>
                            </li>
                            <li>
                                <button className='bg-black px-3 py-1 w-36 rounded-3xl bg-gradient-to-tr from-[#0082d3] via-[#9335b6] to-[#e2008f] flex justify-center items-center text-center'>
                                    <a href="/Blog" className="text-white text-[22px] flex justify-center items-center text-center font-['Actor']">Blog</a>
                                </button>
                            </li>
                            <li>
                                <button className='bg-black px-3 py-1 w-36 rounded-3xl bg-gradient-to-tr from-[#0082d3] via-[#9335b6] to-[#e2008f] flex justify-center items-center text-center'>
                                    <a href="/AboutUs" className="text-white text-[22px] flex justify-center items-center text-center font-['Actor']">About Us</a>
                                </button>
                            </li>
                        </ol>
                    </div>
                </div>
                <img src={dark_mode_header_line} alt="" className='pb-2'/>
            </div>
        </>

    );
}

export default Header;
