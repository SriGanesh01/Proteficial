import React from 'react';

function HeaderHome() {
    return (
        <div className="flex flex-row bg-[#323232] py-3 items-center justify-between px-5">
            <div>
                <ol className='flex flex-row space-x-5 text-white pt-[26px]'>
                    <li>
                        <a href="/home" className='text-white text-[6px] sm:text-[12px] lg:text-[22px] font-normal font-Aldrich hover:underline'>home</a>
                    </li>
                    <li>
                        <a href="/demo" className='text-white text-[6px] sm:text-[12px] lg:text-[22px] font-normal font-Aldrich hover:underline'>demo</a>
                    </li>
                    <li>
                        <a href="/documentation" className='text-white text-[6px] sm:text-[12px] lg:text-[22px] font-normal font-Aldrich hover:underline'>documentation</a>
                    </li>
                    <li>
                        <a href="/downloads" className='text-white text-[6px] sm:text-[12px] lg:text-[22px] font-normal font-Aldrich hover:underline'>download</a>
                    </li>
                    <li className="relative">
                        <a href="/blog" className="text-white text-[6px] sm:text-[12px] lg:text-[22px] font-normal font-Aldrich hover:underline">Blog/Updates</a>
                    </li>
                    <li className="relative">
                        <a href="/about" className="text-white text-[6px] sm:text-[12px] lg:text-[22px] font-normal font-Aldrich hover:underline">About</a>
                    </li>
                    <li className="relative">
                        <a href="/contacts" className="text-white text-[6px] sm:text-[12px] lg:text-[22px] font-normal font-Aldrich hover:underline">Contacts</a>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default HeaderHome;
