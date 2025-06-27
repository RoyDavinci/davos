import React from "react";
import PlayStoreBadge from "../assets/Mobile app store badge.png";
import AppStoreBadge from "../assets/Mobile app store badge (1).png";

const LandingPage = () => {
	return (
		<div className='bg-darkBg text-darkText min-h-screen font-sans mb-40'>
			<header className='flex justify-between items-center px-6 py-4 max-w-7xl mx-auto'>
				<div className='text-xl font-bold text-instacreditOrange'>
					InstantCredit
				</div>
				<nav className='hidden md:flex gap-8 text-sm text-grayLink font-medium'>
					<a href='#' className='hover:text-darkText transition-colors'>
						About
					</a>
					<a href='#' className='hover:text-darkText transition-colors'>
						Partners
					</a>
					<a href='#' className='hover:text-darkText transition-colors'>
						Partnership
					</a>
					<a href='#' className='hover:text-darkText transition-colors'>
						Blog
					</a>
				</nav>
				<button className='bg-instacreditOrange text-sm text-darkText px-5 py-2 rounded-full shadow hover:bg-orange-600 transition-colors'>
					Contact us
				</button>
			</header>
			<section className='flex flex-col items-center text-center px-6 py-16 mt-16 md:mt-24 max-w-5xl mx-auto'>
				<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight'>
					<span>Paying Bills,</span>
					<span className='relative inline-block'>
						<span className='absolute inset-x-0 bottom-1 sm:bottom-2 h-2 sm:h-3 bg-highlightOrange -z-10 rounded-full'></span>
						Reimagined
					</span>
					<br className='hidden sm:block' /> <span>for now</span>
				</h1>
				<p className='text-lightText mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl'>
					Not Just Bill Payment — It's Bill Profitment
					<br className='hidden sm:block' />
				</p>

				<div className='mt-10 flex flex-col sm:flex-row gap-4 mb-20'>
					<a
						href='#'
						className='bg-darkerGray text-darkText border border-gray-700 px-6 py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors'
					>
						<img src={AppStoreBadge} alt='App Store' className='h-6' />
						<span>App Store</span>
					</a>
					<a
						href='#'
						className='bg-darkerGray text-darkText border border-gray-700 px-6 py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors'
					>
						<img src={PlayStoreBadge} alt='Play Store' className='h-6' />
						<span>Play Store</span>
					</a>
				</div>
			</section>
			<div className='flex justify-center px-4 -mt-16 md:-mt-24'>
				<img
					src='/Container.png'
					alt='App preview'
					className='max-w-full w-[calc(100%-40px)] sm:w-[700px] md:w-[800px] lg:w-[900px] xl:w-[1000px] object-contain'
				/>
			</div>
		</div>
	);
};

export default LandingPage;
