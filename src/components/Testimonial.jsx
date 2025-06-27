import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
	{
		text: `At first I thought it was one of those apps that just hype. But omo, I actually got real cashback after paying for my NEPA bill! I’ve used the cashback twice now to buy airtime. This app is not joke!`,
		name: "Tosin A.",
		location: "Lagos",
	},
	{
		text: `I referred my three siblings and now I dey chop from their data addiction every week 😅. The best part is I can still pay my own bills and earn too. 10/10, highly recommend!`,
		name: "Chidera N.",
		location: "Enugu",
	},
	{
		text: `This app is saving me money every month. I’ve stopped buying airtime directly from my bank — I just use InstantCredit and get cash back every single time. It’s the little things that add up!`,
		name: "Femi B.",
		location: "Abuja",
	},
	{
		text: `Very easy to use, clean interface and fast payment. I love how I don’t need to do anything extra to earn cashback. Just pay and boom, money enter. Even referred my husband 😁.`,
		name: "Aisha M.",
		location: "Kano",
	},
	{
		text: `Normally, paying bills dey pain me. But now that I know I go get something back, I dey even rush to pay before due date 😂. Well done to the InstantCredit team — una dey try!`,
		name: "Uchenna I.",
		location: "Port Harcourt",
	},
];

const TestimonialsSection = () => {
	return (
		<section className='bg-black text-white px-6 py-20'>
			<h2 className='text-center text-lg tracking-widest font-semibold mb-12'>
				TESTIMONIALS
			</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto'>
				{testimonials.map((item, idx) => (
					<div key={idx} className='bg-transparent text-left space-y-4'>
						<FaQuoteLeft className='text-gray-600 text-3xl' />
						<p className='text-gray-200 leading-relaxed text-sm'>{item.text}</p>
						<div>
							<p className='font-semibold text-white'>{item.name}</p>
							<p className='text-gray-500 text-sm'>{item.location}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default TestimonialsSection;
