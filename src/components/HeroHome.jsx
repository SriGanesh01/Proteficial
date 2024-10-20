import SideArrow from '../assets/SideArrow.png';

function HeroHome() {
    return (
        <>
            <div className="bg-gradient-to-b from-[#29003E] to-[#070309] h-screen flex flex-col justify-center items-center">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-[#0082d3] via-[#9335b6] to-[#e2008f] text-[120px] font-normal font-['Alata']">
                    Proteficial
                </h1>
                <h2 className="font-['Alata'] text-white mt-[-30px] text-[30px]">AI-powered solution to predict protein structures reliably</h2>
                <button className='bg-black px-3 py-1 w-64 h-16 rounded-[50px] text-[50px] bg-gradient-to-tr from-[#0082d3] via-[#9335b6] to-[#e2008f] flex justify-center items-center text-center mt-20'>
                    <a href="/AboutUs" className="text-white text-[22px] flex justify-center items-center text-center font-['Actor']">Try Proteficial now</a>
                    <img src={SideArrow} alt="SideArrow" />
                </button>
            </div>
        </>
    );
}

export default HeroHome;
