import React from "react";
import { FiGift, FiHeadphones, FiUsers } from "react-icons/fi";

const FeaturesSection = () => {
	return (
		<section className='bg-black text-white px-6 py-16 mt-20 mb-20'>
			<div className='grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16'>
				{[
					["6M+", "Active users"],
					["24/7", "Users support"],
					["160+", "Countries"],
					["$22B+", "Trade volume"],
				].map(([number, label]) => (
					<div
						key={label}
						className='bg-[#111] rounded-xl p-6 text-center border border-gray-800'
					>
						<h3 className='text-xl font-bold text-gray-200 mb-1'>{number}</h3>
						<p className='text-sm text-gray-400'>{label}</p>
					</div>
				))}
			</div>

			{/* CTA */}
			<div className='text-center max-w-2xl mx-auto mb-12'>
				<p className='text-sm text-gray-400'>
					Always by <span className='text-orange-500'>your side</span>
				</p>
				<h2 className='text-3xl md:text-4xl font-bold mt-2 mb-3'>
					Be the first to use Instacredit!
				</h2>
				<p className='text-gray-400 text-sm'>
					Get faster, safer, more affordable cloud object storage with no
					central point of failure.
				</p>
			</div>
			<div className='bg-gradient-to-b from-[#111111] to-black border border-[#222] rounded-2xl p-6 max-w-6xl mx-auto shadow-md'>
				<div className='flex flex-col md:flex-row items-center justify-between gap-10'>
					<div className='text-center flex-1'>
						<div className='flex justify-center mb-3'>
							<div className='bg-black rounded-full p-3 border border-orange-500'>
								<FiGift className='text-orange-500 text-2xl' />
							</div>
						</div>
						<h3 className='text-lg font-semibold mb-1'>Cashback</h3>
						<p className='text-sm text-gray-400'>
							Learn blockchain and crypto for free.
						</p>
					</div>
					<div className='text-center flex-1'>
						<div className='flex justify-center mb-3'>
							<div className='bg-black rounded-full p-3 border border-orange-500'>
								<FiHeadphones className='text-orange-500 text-2xl' />
							</div>
						</div>
						<h3 className='text-lg font-semibold mb-1'>24/7 Support</h3>
						<p className='text-sm text-gray-400'>
							Need help? Get your requests solved quickly via support team.
						</p>
					</div>
					<div className='text-center flex-1'>
						<div className='flex justify-center mb-3'>
							<div className='bg-black rounded-full p-3 border border-orange-500'>
								<FiUsers className='text-orange-500 text-2xl' />
							</div>
						</div>
						<h3 className='text-lg font-semibold mb-1'>Security</h3>
						<p className='text-sm text-gray-400'>
							A topnotch security created to make you sleep easy.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
