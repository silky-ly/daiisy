import { useState } from 'react';

const Dropdown = ({ children }) => {
	const [dropdown, setDropdown] = useState();

	return (
		<section
			className={
				dropdown
					? 'hidden'
					: 'dropdown bg-white text-black w-full m-auto p-6 px-24 absolute top-10 left-0'
			}
			onClick={() => setDropdown(!dropdown)}
		>
			{children}
		</section>
	);
};

export default Dropdown;
