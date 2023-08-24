import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';
import { DropdownList } from '../dropdown/DropdownList';
import { Bag, Profile, Search } from '../../static/assets/svg/svg';
import { navs, all, categories, ingredients } from '../../data/dropdown';
import { SearchInput, SearchList } from '../card/SearchList';

const Navbar = () => {
	const { cartTotalQty } = useSelector((state) => state.cart);

	const [hover, setHover] = useState(false);

	const [search, setSearch] = useState(false);

	return (
		<>
			<nav className='w-full m-auto px-24 bg-white flex justify-between h-[60px]'>
				<div className='nav-wrap w-3/4 flex justify-between items-center'>
					{navs.map((nav) => {
						if (nav.name === 'shop') {
							return (
								<div
									key={nav._id}
									onMouseEnter={() => setHover(true)}
									onMouseLeave={() => setHover(false)}
								>
									<Link
										to={nav.path}
										className='default-link nav-link on-link-hover'
									>
										{nav.name}
									</Link>
									{hover && (
										<Dropdown>
											<div className='text-black w-full grid grid-cols-5'>
												<DropdownList
													data={all}
													title='all products'
												/>
												<DropdownList
													data={categories}
													title='by category'
												/>
												<DropdownList
													data={ingredients}
													title='by ingredient'
												/>
											</div>
										</Dropdown>
									)}
								</div>
							);
						}

						return (
							<a
								key={nav._id}
								href={nav.path}
								className='default-link nav-link on-link-hover'
							>
								{nav.name}
							</a>
						);
					})}
				</div>

				<div className='w-1/12 flex justify-around items-center'>
					<a
						href='/search'
						className='default-link'
						onClick='onclick'
					>
						<Search width={15} height={15} />
					</a>

					<a href='/profile' className='default-link'>
						<Profile />
					</a>

					<a href='/cart' className='default-link lin relative'>
						<Bag />
						<span className='w-3 h-3 flex justify-center items-center absolute top-[-4px] right-[-4px] text-xxs rounded-full bg-red-600 text-white'>
							{cartTotalQty}
						</span>
					</a>
				</div>
			</nav>

			<SearchInput />
		</>
	);
};

export default Navbar;
