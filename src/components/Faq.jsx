import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
	{
		id: 1,
		question: "What is InstantCredit?",
		answer:
			"InstantCredit is a bill payment app that rewards you with real instant cashback every time you pay for services like airtime, data, electricity, TV subscriptions, internet, or even betting top-ups.",
	},
	{
		id: 2,
		question: "What kind of bills can I pay with InstantCredit?",
		answer:
			"You can pay for:\n- Airtime & Data (MTN, Glo, Airtel, 9mobile)\n- Electricity (PHCN/NEPA)\n- Cable TV (DStv, GOtv, Startimes)\n- Internet/WiFi subscriptions\n- Betting account top-ups (e.g. Bet9ja, SportyBet, etc.)",
	},
	{
		id: 3,
		question: "How does the cashback work?",
		answer:
			"Simple: every time you perform a transaction on the app, we give you instant cashback into your wallet — no waiting, no points, just real cash you can use to pay for your next bill.",
	},
	{
		id: 4,
		question: "Can I use the cashback to pay other bills?",
		answer:
			"Yes o! That’s the beauty of it. You can use your accumulated cashback to pay for airtime, electricity, data, or any other service on the app. It’s like getting paid to pay your bills.",
	},
	{
		id: 5,
		question: "Is there a referral program?",
		answer:
			"Absolutely. If you refer someone to the app, and they start using it, you earn cashback every time they buy data or airtime — for 6 whole months! 😎",
	},
	{
		id: 6,
		question: "Is there a limit to how many people I can refer?",
		answer:
			"Nope! Refer your friends, your classmates, your siblings, your entire compound — there’s no limit to how many people you can refer or how much cashback you can earn from them.",
	},
	{
		id: 7,
		question: "How do I get my referral link?",
		answer:
			"Download the app, create your account, and perform one transaction (like buying airtime). After that, your unique referral link will be activated in the app for sharing.",
	},
	{
		id: 8,
		question: "Where can I download the InstantCredit app?",
		answer:
			"You can download the app from:\n- Google Play Store (for Android users)\n- Apple App Store (for iOS/iPhone users)",
	},
	{
		id: 9,
		question: "Is the app safe to use?",
		answer:
			"Yes, InstantCredit uses secure payment gateways and protects your information with best-in-class security standards. Your money and data are safe with us.",
	},
	{
		id: 10,
		question: "Can I withdraw my cashback to my bank account?",
		answer:
			"Yes, you can! 🎉 Your cashback goes straight into your InstantCredit wallet, and from there, you can either use it to pay bills within the app or withdraw it directly to your bank account. Your money, your rules. 💸",
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
