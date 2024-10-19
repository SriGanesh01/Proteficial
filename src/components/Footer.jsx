import Call from '../assets/Call.svg';
import Follow from '../assets/Follow.svg';
import Mail from '../assets/Mail.svg';
import GitHub from '../assets/GitHub.svg';
import Instagram from '../assets/Instagram.svg';
import LinkedIn from '../assets/LinkedIn.svg';
import TwitterX from '../assets/TwitterX.svg';
import WhatsApp from '../assets/WhatsApp.svg';

function Footer() {
    return (
        <div className="">
            <div className="bg-[#780F9B] flex text-white font-['Alata'] px-6">
                <div className="flex flex-grow flex-row space-x-3 items-center">
                    <div>
                        <img src={Call} alt="Call Us" className='h-10' />
                    </div>
                    <div>
                        <p>Call Us</p>
                        <p>+91 9949463478</p>
                    </div>
                </div>
                <div className="flex flex-grow flex-row space-x-3 items-center">
                    <div>
                        <img src={Mail} alt="Mail Us" className='h-10' />
                    </div>
                    <div>
                        <p>Mail Us</p>
                        <p>synnux2027@gmail.com</p>
                    </div>
                </div>
                <div className="flex flex-grow flex-row space-x-3 items-center">
                    <div>
                        <img src={Follow} alt=" Follow Us" className='h-10' />
                    </div>
                    <div>
                        <p>Follow Us</p>
                        <div className='flex flex-row mx-[-2px] space-x-1'>
                            <img src={WhatsApp} alt="Whatsapp" href="#" className='h-7'/>
                            <img src={LinkedIn} alt="LinkedIn" href="#" className='h-7'/>
                            <img src={Instagram} alt="Instagram" href="#" className='h-7'/>
                            <img src={GitHub} alt="GitHub" href="#" className='h-7'/>
                            <img src={TwitterX} alt="Twitter" href="#" className='h-7'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#591657] flex text-white py-4">
                <div className="flex-grow px-7 pt-2">
                    <h2 className="text-[28px] font-['Alata']">About Us</h2>
                </div>
                
                <div className="h-auto w-0 border-l border-white my-3"></div>

                <div className="pt-2 pb-7 flex-grow px-7">
                    <h2 className="text-[28px] font-['Alata']">Quick Links</h2>
                    <ol className="">
                        <li className="pt-2">
                            <a href="/home" className="text-white text-sm font-['Alata']">Home</a>
                        </li>
                        <li className="pt-2">
                            <a href="/Proteficial" className="text-white text-sm font-['Alata']">Proteficial</a>
                        </li>
                        <li className="pt-2">
                            <a href="/Blog" className="text-white text-sm font-['Alata']">Blog</a>
                        </li>
                        <li className="pt-2">
                            <a href="/AboutUs" className="text-white text-sm font-['Alata']">About Us</a>
                        </li>
                    </ol>
                </div>
                
                <div className="h-auto w-0 border-l border-white my-3"></div>

                <div className="flex-grow px-7 pt-2">
                    <h2 className="text-[28px] font-['Alata']">Our Products</h2>
                </div>
            </div>

            <div className="bg-[#390642]">
                <p className="text-white flex justify-center items-center py-2">
                    Copyright &copy; 2024 Synnux. All Rights Reserved
                </p>
            </div>
        </div>
    );
}

export default Footer;
