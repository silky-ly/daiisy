import { useSelector } from 'react-redux';
import { Bag, Profile, Search } from '../../static/assets/svg/svg';

const Header = () => {
	const { cartTotalQty } = useSelector((state) => state.cart);

	return (
		<nav className='w-full m-auto p-6 px-24 bg-white flex justify-between'>
			<div className='nav-wrap w-3/4 flex justify-between'>
				{[
					['shop', '/'],
					['blog', '/blog'],
					['cart', '/cart'],
					['about', '/about'],
				].map(([title, path], index) => (
					<a
						key={index}
						href={path}
						className='uppercase text-xs font-semibold font-opposit tracking-wider cursor-pointer relative before:content-["_"] before:absolute before:w-full before:h-[0.5px] pb-1 before:bg-black before:left-0 before:bottom-0 before:origin-right before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:origin-left hover:before:scale-x-100'
					>
						{title}
					</a>
				))}
			</div>

			<div className='link-wrap w-1/12 flex justify-around'>
				<a href='' className='text-xs font-semibold cursor-pointer'>
					<Search />
				</a>

				<a href='/profile' className='text-xs font-semibold cursor-pointer'>
					<Profile />
				</a>

				<a
					href=''
					className='lin text-xs font-semibold cursor-pointer relative'
				>
					<Bag />
					<span className='w-3 h-3 flex justify-center items-center absolute top-[-4px] right-[-4px] text-xxs rounded-full bg-red-600 text-white'>
						{cartTotalQty}
					</span>
				</a>
			</div>
		</nav>
	);
};

export default Header;
