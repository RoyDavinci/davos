import React from "react";
import InstacreditLogo from "../assets/Logo.png";
import GooglePlayBadge from "../assets/Mobile app store badge.png";
import AppStoreBadge from "../assets/Mobile app store badge (1).png";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className='bg-darkBg text-lightText py-12 px-4 md:px-8 lg:px-16 mt-20'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-footerBorder pb-8 mb-8'>
				<div className='flex flex-col items-center md:items-start text-center md:text-left'>
					<img
						src={InstacreditLogo}
						alt='Instacredit Logo'
						className='h-10 mb-4'
					/>{" "}
					<p className='text-sm mb-4'>
						Transform your transaction with Instacredit. <br />A solution to
						every class.
					</p>
					<div className='flex space-x-4'>
						<a
							href='https://instagram.com'
							target='_blank'
							rel='noopener noreferrer'
							className='p-3 rounded-full border border-lightText hover:text-highlightOrange hover:border-highlightOrange transition-colors'
						>
							<FaInstagram size={20} />
						</a>
						<a
							href='https://facebook.com'
							target='_blank'
							rel='noopener noreferrer'
							className='p-3 rounded-full border border-lightText hover:text-highlightOrange hover:border-highlightOrange transition-colors'
						>
							<FaFacebookF size={20} />
						</a>
						<a
							href='https://twitter.com'
							target='_blank'
							rel='noopener noreferrer'
							className='p-3 rounded-full border border-lightText hover:text-highlightOrange hover:border-highlightOrange transition-colors'
						>
							<FaTwitter size={20} />
						</a>
					</div>
				</div>

				<div className='text-center md:text-left'>
					<h4 className='text-darkText font-semibold text-lg mb-4'>Links</h4>
					<ul className='space-y-2'>
						<li>
							<a
								href='#'
								className='hover:text-highlightOrange transition-colors text-sm'
							>
								Features
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-highlightOrange transition-colors text-sm'
							>
								Benefits
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-highlightOrange transition-colors text-sm'
							>
								Services
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-highlightOrange transition-colors text-sm'
							>
								Why Crypgo
							</a>
						</li>{" "}
						<li>
							<a
								href='#'
								className='hover:text-highlightOrange transition-colors text-sm'
							>
								FAQs
							</a>
						</li>
					</ul>
				</div>
				<div className='text-center md:text-left'>
					<h4 className='text-darkText font-semibold text-lg mb-4'>
						Other Pages
					</h4>
					<ul className='space-y-2'>
						<li>
							<a
								href='#'
								className='hover:text-highlightOrange transition-colors text-sm'
							>
								Error 404
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-highlightOrange transition-colors text-sm'
							>
								Terms & Conditions
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-highlightOrange transition-colors text-sm'
							>
								Privacy Policy
							</a>
						</li>
					</ul>
				</div>
				<div className='text-center md:text-left'>
					<h4 className='text-darkText font-semibold text-lg mb-4'>
						Download app
					</h4>
					<div className='flex flex-col items-center md:items-start space-y-4'>
						<a
							href='https://play.google.com/store'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								src={GooglePlayBadge}
								alt='Get it on Google Play'
								className='h-12'
							/>{" "}
						</a>
						<a
							href='https://www.apple.com/app-store/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								src={AppStoreBadge}
								alt='Download on the App Store'
								className='h-12'
							/>{" "}
						</a>
					</div>
				</div>
			</div>
			<div className='text-center text-sm text-lightText'>
				Copyright ©2025 Instacredit. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
