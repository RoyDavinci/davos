import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
	{
		id: 1,
		question: "What is Instacredit?",
		answer:
			"Instacredit is a platform designed to provide quick and reliable credit solutions to individuals and businesses. We aim to simplify the lending process.",
	},
	{
		id: 2,
		question: "Is Instacredit available worldwide?",
		answer:
			"No, Instacredit is currently available nationwide within Nigeria. We are working on expanding our services to other regions in the future.",
	},
	{
		id: 3,
		question: "Which cryptocurrencies are supported on Instacredit?",
		answer:
			"Instacredit does not directly support cryptocurrencies for lending or borrowing. Our services are based on traditional fiat currencies.",
	},
	{
		id: 4,
		question: "Is my personal information secure within Instacredit?",
		answer:
			"Yes, we prioritize the security of your personal information. We use industry-standard encryption and security protocols to protect your data.",
	},
	{
		id: 5,
		question: "Are there any deposit or withdrawal fees?",
		answer:
			"Instacredit has transparent fee structures. Specific details regarding deposit and withdrawal fees, if any, will be clearly communicated during your transaction.",
	},
	{
		id: 6,
		question: "Does Instacredit offer advanced trading tools?",
		answer:
			"No, Instacredit focuses on credit and lending services, not advanced trading tools for financial markets.",
	},
];

const FAQSection = () => {
	return (
		<section className='bg-darkBg text-darkText py-16 px-4 md:px-8 lg:px-16'>
			<div className='max-w-4xl mx-auto text-center'>
				<span className='text-sm uppercase tracking-wider text-lightText'>
					Popular <span className='text-highlightOrange'>questions</span>
				</span>
				<h2 className='text-4xl md:text-5xl font-bold my-2'>
					Learn more about Instacredit
				</h2>
				<p className='text-lg text-lightText mb-10'>
					We are available nationwide
				</p>

				<div className='space-y-4'>
					{" "}
					{faqData.map((item) => (
						<FAQItem
							key={item.id}
							question={item.question}
							answer={item.answer}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQSection;

const FAQItem = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='bg-darkCard rounded-lg mb-4 shadow-lg overflow-hidden'>
			<div
				className='flex justify-between items-center p-5 cursor-pointer border-b border-gray-800'
				onClick={toggleOpen}
			>
				<h3 className='text-lg font-medium text-darkText'>{question}</h3>
				<motion.div
					animate={{ rotate: isOpen ? 45 : 0 }}
					transition={{ duration: 0.3 }}
					className='text-highlightOrange'
				>
					{isOpen ? <FaMinus size={20} /> : <FaPlus size={20} />}
				</motion.div>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className='p-5 bg-gray-900 text-lightText'
					>
						<p>{answer}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
