import { useState } from 'react';
import { SearchCard } from './Cards';
import { Search } from '../../static/assets/svg/svg';

export const SearchInput = ({ search, products }) => {
	const [field, setField] = useState('');

	const filter = products.filter((product) => {
		return product.name.toLowerCase().includes(field.toLowerCase());
	});

	const handleChange = (e) => {
		setField(e.target.value);
	};

	return (
		<section className='fixed top-[60px] w-full py-24 z-10 bg-white'>
			<div
				className={
					search
						? 'w-2/5 mx-auto flex justify-center items-center'
						: 'hidden'
				}
			>
				<input
					className='input mb-0 uppercase text-xl tracking-wider bg-inherit border-0 border-b-2 border-black outline-0 placeholder:uppercase placeholder:tracking-wider placeholder:text-xl'
					type='text'
					value={field}
					placeholder='search'
					onChange={handleChange}
				/>

				<span className='-ml-6 font-bold text-4xl'>
					<Search width={25} height={25} stroke={20} />
				</span>
			</div>
			<SearchList products={filter} />
		</section>
	);
};

export const SearchList = ({ products }) => {
	const filtered = products.map((product) => (
		<SearchCard product={product} />
	));

	return (
		<section className='my-4 w-2/5 mx-auto'>
			<h4 className='text-start mb-5 py-3 bg-purple-200 text-purple-950'>
				products
			</h4>
			{filtered}
		</section>
	);
};
