import QuoteUp from '../assets/QuoteUp.svg';
import QuoteDown from '../assets/QuoteDown.svg';

function Motto() {
	return (
		<div className='bg-[#070309] flex flex-col pb-24'>
			<p className='text-5xl font-bold font-Alata text-transparent bg-clip-text bg-gradient-to-tr from-[#0082d3] via-[#9335b6] to-[#e2008f] text-center'>OUR MOTTO</p>
			<img src={QuoteUp} alt="Quote Up" className='w-[85px] mb-4 flex justify-between items-start ml-16' />
			<p className='font-Alata text-3xl text-transparent text-white text-center px-44 pb-14'>
				The difference between our two predicted configurations and the others that have been described
				in the literature is that ours are precise, whereas the others are more or less vague.
				I feel in a sense that this represents the solution of the problem of the structure of proteins.
			</p>
		</div>
	);
}

export default Motto;