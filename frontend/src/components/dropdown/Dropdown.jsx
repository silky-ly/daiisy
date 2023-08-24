import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Dropdown = ({ children }) => {
	const [dropdown, setDropdown] = useState();

	return (
		<section
			className={
				dropdown
					? 'hidden'
					: 'dropdown bg-white text-black w-full m-auto p-6 px-24 absolute top-10 left-0 z-10'
			}
			onClick={() => setDropdown(!dropdown)}
		>
			{children}
		</section>
	);
};

export const DropdownList = ({ title, data, click }) => {
	return (
		<div>
			<h4 className='mb-2 text-xs text-start'>{title}</h4>

			<ul className='sub-menu'>
				{data.map((option) => (
					<li
						key={option._id}
						className='text-xs -tracking-tightest font-normal capitalize hover:text-[#444]'
					>
						<Link
							to={option.path}
							className='inline-block leading-10'
							onClick={click}
						>
							{option.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
