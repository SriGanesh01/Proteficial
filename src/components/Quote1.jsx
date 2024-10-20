import QuoteUp from '../assets/QuoteUp.svg';
import QuoteDown from '../assets/QuoteDown.svg';

function Quote1() {
  return (
    <div className='bg-[#070309] flex flex-col pb-24'>
        <img src={QuoteUp} alt="Quote Up" className='w-[85px] mb-4 flex justify-between items-start ml-16' />
        <p className='font-Alata text-5xl text-transparent bg-clip-text bg-gradient-to-tr from-[#0082d3] via-[#9335b6] to-[#e2008f] text-center px-32 pb-14'>
            Structure is not just a template. It is the essence of understanding how proteins work.
        </p>
        <p className='text-white flex justify-center items-center text-center'>&#8209; Michael Levitt</p>
    </div>
  );
}

export default Quote1;
