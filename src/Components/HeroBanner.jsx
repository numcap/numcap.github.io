export const HeroBanner = () => (
	<div className='bg-[url("/images/IMG_4196.jpg")] bg-center md:bg-[url("/images/IMG_4196.jpg")] bg-cover h-[160vw] sm:h-[800px] bg-no-repeat'>
		<div className='bg-black h-full w-full bg-opacity-60 flex flex-col px-3 sm:px-20 place-content-center gap-5'>
			<h1 className='text-white text-5xl sm:text-7xl w-fit font-semibold'>
				Explore the Mind
			</h1>
			<h1 className='text-white text-5xl sm:text-7xl w-fit font-semibold'>
				Empower the Future
			</h1>
			<h1 className='text-kings-green-200 text-3xl sm:text-6xl w-fit font-medium'>
				King&apos;s Psychology Association
			</h1>
			<div className='text-white gap-x-3 sm:gap-x-10 flex w-fit'>
				<button className='px-4 py-4 sm:px-5 sm:py-3 text-2xl rounded-3xl bg-kings-green-500 hover:bg-kings-green-700 transition-all duration-300 hover:scale-110'
				onClick={() => window.scroll(0,750)}>
					Learn More
				</button>
				<button className='px-5 py-3 text-2xl rounded-3xl bg-kings-gold-600 hover:bg-kings-gold-800 transition-all duration-300 hover:scale-110'
				onClick={() => window.scroll(0,1400)}>
					Join Now
				</button>
			</div>
		</div>
	</div>
);
