import React from 'react';
import { appleImg, bagImg, searchImg } from '../utils/utils.js';
import { navLists } from '../constants/index.js';

const Navbar = () => {
	return (
		<header className="w-full py-5 sm:px-10 px-5 flex justify-center items-center">
			<nav className="flex w-full screen-max-width">
				<img src={appleImg} alt="apple" height={18} width={14} />

				<div className="flex flex-1 justify-center max-sm:hidden">
					{navLists.map((tag, index) => (
						<div
							key={index}
							className="px-5 text-gray cursor-pointer hover:text-white transition-all"
						>
							{tag}
						</div>
					))}
				</div>

				<div className="flex item-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
					<img src={searchImg} alt="search" height={18} width={18} />
					<img src={bagImg} alt="search" height={18} width={18} />
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
