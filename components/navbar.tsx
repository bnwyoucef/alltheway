'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
	const [language, setLanguage] = useState('EN');

	return (
		<nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
			<Image
				className="cursor-pointer"
				src="/alltheway_logo.png"
				alt="alltheway logo"
				width={180}
				height={38}
				priority
			/>
			<div className="hidden md:flex space-x-8">
				<Link href="#home" className="text-gray-700 hover:text-[#FDCD00]">Home</Link>
				<Link href="#how-it-works" className="text-gray-700 hover:text-[#FDCD00]">How It Works</Link>
				<Link href="#help-support" className="text-gray-700 hover:text-[#FDCD00]">Help & Support</Link>
			</div>
			<div className="flex items-center space-x-6">
				{/* Language Selector */}
				{language === 'EN' && (
					<Image
						className="-mr-1"
						src="/uk.svg"
						alt="alltheway logo"
						width={20}
						height={20}
						priority
					/>
				)}
				{language === 'FR' && (
					<Image
						className="-mr-1"
						src="/fr.svg"
						alt="alltheway logo"
						width={20}
						height={20}
						priority
					/>
				)}
				{language === 'ES' && (
					<Image
						className="-mr-1"
						src="/es.svg"
						alt="alltheway logo"
						width={20}
						height={20}
						priority
					/>
				)}
				<select
					value={language}
					onChange={(e) => setLanguage(e.target.value)}
					className="cursor-pointer px-2 py-1 text-gray-700 focus:outline-none"
				>
					<option value="EN">EN</option>
					<option value="FR">FR</option>
					<option value="ES">ES</option>
				</select>
				<button className="border-2 text-black px-4 py-2 rounded-xl hover:cursor-pointer">
					For Business
				</button>
			</div>
		</nav>
	);
}
