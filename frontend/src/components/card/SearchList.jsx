import { Search } from '../../static/assets/svg/svg';

export const SearchList = () => {
	return <div className='flex justify-between items-center'></div>;
};

export const SearchInput = ({ search }) => {
	return (
		<div className='search w-2/5 mx-auto my-20 flex justify-center items-center bg-pink-500'>
			<input
				className='input mb-0 border-0 border-b-2 border-black outline-0 placeholder:uppercase placeholder:tracking-wider placeholder:text-xl'
				type='text'
				value={search}
				placeholder='search'
			/>
			<span className='-ml-6 font-bold text-4xl'>
				<Search width={25} height={25} stroke={20} />
			</span>
		</div>
	);
};
