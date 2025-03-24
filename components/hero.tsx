import Image from 'next/image';
import { ArrowRight } from 'lucide-react';


export default function HeroSection() {
	return (
		<section className="relative h-[652px] flex items-center justify-between bg-[#060606] text-white rounded-b-4xl">
			{/* Left Content */}
			<div className="px-20">
				<h1 className="text-5xl font-bold leading-tight">
					Fly stress-free, <br />
					We handle your bags
				</h1>
				<div className="flex items-center mt-4">
					<span className="text-gray-400 text-sm"><span className="text-white">4.9/5</span> Rating</span>
					<div className="flex items-center ml-2">
						{/* Trustpilot Stars */}
						{[1, 2, 3, 4].map((_, i) =>
							<div key={i} className="flex justify-center items-center w-4 h-4 bg-[#219653] mr-0.5
							">
								<span className="text-white">★</span>
							</div>
						)}
						<div className="flex justify-center items-center w-4 h-4 bg-[#219653] mr-0.5
							">
							<span className="text-white">★</span>
							<div className="w-1 h-4 bg-white"></div>
						</div>
					</div>
					<span className="ml-2 text-[#BEBEBE] font-semibold text-sm">Trustpilot</span>
				</div>
				<button className="mt-6 flex items-center bg-yellow-400 text-black font-bold py-3 px-6 rounded-md hover:bg-yellow-500 transition cursor-pointer">
					Book now <ArrowRight className="ml-2" />
				</button>
				<p className="mt-4 text-gray-400 font-bold">Starting from $25</p>
			</div>

			<div className='absolute opacity-20 left-[60px] top-7 w-22 h-22 bg-[#D9AB5233]'></div>
			<div className='absolute opacity-20 left-[60px] bottom-7 w-22 h-22 bg-[#D9AB5233]'></div>
			<div className='absolute opacity-20 left-[20%] top-[40%] w-44 h-22 bg-[#D9AB5233]'></div>
			<div className='absolute opacity-20 left-[20%] top-0 w-22 h-22 bg-[#D9AB5233]'></div>
			<div className='absolute opacity-20 left-[15%] bottom-0 w-44 h-22 bg-[#D9AB5233]'></div>
			<div className='absolute opacity-20 left-[45%] bottom-0 w-22 h-22 bg-[#D9AB5233]'></div>

			{/* bag Image */}
			<div className="absolute top-[92px] h-[356px] w-[360px] z-10 left-[43%]">
				<div className="h-full flex justify-center items-center">
					<div className='w-[110px] -mt-16 bg-yellow-400 z-20 py-2 pl-2 -rotate-5'>
						<Image
							className="cursor-pointer"
							src="/alltheway_logo.png"
							alt="alltheway logo"
							width={110}
							height={31}
							priority
						/>
					</div>
				</div>
				<Image src="/bag.png" fill alt="Suitcase" className="drop-shadow-lg" />
			</div>

			{/* Right Content */}
			<div className="relative flex justify-center overflow-hidden w-[45%] bg-yellow-400 h-full rounded-br-4xl">
				<div className="rounded-t-[220px] absolute top-[62px] bg-[#D9D9D9] h-[619px] w-[391px]">
					<Image src="/girl_check2.png" fill alt="Happy woman with tablet" className='mt-2' />
				</div>
			</div>
		</section>
	);
}
