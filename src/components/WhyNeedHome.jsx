import Img1 from '../assets/Img1.svg';
import Img2 from '../assets/img2.svg';
import Img3 from '../assets/img3.svg';
import ImgTextCombo1 from './ImgTextCombo1';
import ImgTextCombo2 from './ImgTextCombo2';

function WhyNeedHome() {
    return (
        <>
            <div className='bg-[#070309] pb-36'>
                <div className='flex items-center justify-center pb-24'>
                    <h1 className="font-['Alata'] text-[55px] text-transparent bg-clip-text bg-gradient-to-tr from-[#0082d3] via-[#9335b6] to-[#e2008f]">Why Do We Need It?</h1>
                </div>
                <div className='flex flex-col space-y-12'>
                    <ImgTextCombo1 img={Img1} text='EARLY DETECTION OF DISEASES'/>
                    <ImgTextCombo2 img={Img2} text='DEVELOPING HIGHLY SPECIFIC DRUGS'/>
                    <ImgTextCombo1 img={Img3} text='SWIFTLY ADDRESSING PANDEMICS'/>
                </div>
            </div>
        </>
    );
}

export default WhyNeedHome;
