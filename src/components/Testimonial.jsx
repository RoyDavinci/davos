import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = new Array(4).fill({
	text: `There's no other programme that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch. What’s more, everything has been broken down in step-by-step detail with real action plans including finding your niche`,
	name: "Matthew Ola",
	location: "Signal Rm 5.",
});

const TestimonialsSection = () => {
	return (
		<section className='bg-black text-white px-6 py-20'>
			<h2 className='text-center text-lg tracking-widest font-semibold mb-12'>
				TESTIMONIAL
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
