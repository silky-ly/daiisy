import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';
import { EpArrowLeft, EpArrowRight } from '../../static/assets/svg/svg';
import { getProducts } from '../../features/products/product.slice';
import Layout from '../../layouts/Layout';
import { Card } from '../../components/card/Cards';
import lip from '../../static/assets/images/cream.jpg';
import lid from '../../static/assets/images/mo.jpg';
import { addItem } from '../../features/cart/cart.slice';
import { Accordion } from '../../components/accordion/Accordion';

const HomeScreen = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const [accordion, setAccordion] = useState(false);

	const { isLoading, isSuccess, isError, message, products } = useSelector(
		(state) => state.products
	);

	const addToCartHandler = (product) => {
		dispatch(addItem(product));
		console.log('PRODUCT::: ', product);
		navigate(`/cart`);
	};

	const ut = [
		{ question: 'how well does this work?', answer: 'extraordinary' },
		{ question: 'garfield?', answer: 'cat' },
	];

	const onToggle = (index) => {
		if (accordion === index) {
			return setAccordion(null);
		}

		setAccordion(index);
	};

	useEffect(() => {
		isError ? message : isSuccess ? message : null;

		dispatch(getProducts());
	}, [isSuccess, isError, message, dispatch]);

	return (
		<Layout>
			<section className='homepage w-full h-full'>
				<div className='h-[700px] relative w-full'>
					<img src={lip} />
					<div className='overlay'></div>
					<div className='inset-x-2/3 absolute top-2/4 w-1/4 block'>
						<p className='sub-head-p font-opposit text-black'>
							get your hydrating milk cleanser <br />
						</p>

						{/* <button className='btn-shop relative before:block w-full h-14 text-black text-xs font-semibold uppercase tracking-wider bg-white before:bg-black before:top-0 before:left-0 before:right-0 before:bottom-0 before:content-["_"] before:inset-0 before:absolute before:scale-x-0 before:origin-bottom-right before:transition-transform before:z-[-1] hover:before:scale-x-100 hover:before:origin-bottom-left'>
							shop now
						</button> */}

						{/* <button className='btn-shop w-full h-14 text-black text-xs font-semibold uppercase tracking-wider transition-all duration-500 ease-in bg-white active:outline-0 active:text-white bg-left-top bg-[length:100%_200%] hover:bg-right-bottom hover:text-white hover:outline-0 hover:bg-[linear-gradient(to_bottom,_transparent_50%,_#333_50%)]'>
							shop now
						</button> */}

						{/* <button className='btn-shop px-10 py-6 text-black bg-none text-xs font-semibold uppercase tracking-wider transition-all duration-300 after:transition-all after:duration-300 block relative before:bg-black after:bg-black before:content-["_"] after:content-["_"] before:absolute before:z-[-1] after:absolute after:z-[-1] hover:text-white after:h-0 after:left-0 after:top after:w-full hover:after:w-full'>
							shop now
						</button> */}

						{/* <button
							data-hover='click me!'
							className='hover:cursor-pointer font-bold overflow-hidden px-6 py-5 relative border-solid border-2 border-black bg-transparent before:content-[attr(data-hover)] before:absolute before:top-8 before:left-0 before:w-full before:uppercase before:opacity-0 before:translate-x-[-100%] before:translate-y-0 before:transition-all before:duration-300 before:ease-in-out hover:before:opacity-100 hover:before:translate-x-0 hover:before:translate-y-0'
						>
							<div>Hover me!</div>
						</button> */}
					</div>
				</div>

				<div className='mt-16 px-8 h-[700px] relative'>
					<h4 className='sub-head-4 my-12'>shop top sellers</h4>

					<Carousel
						className='w-full h-auto'
						withIndicators
						nextControlIcon={<EpArrowRight />}
						previousControlIcon={<EpArrowLeft />}
						slideSize='25%'
						slidesToScroll={4}
						align='start'
						slideGap='md'
						mx='auto'
						styles={(theme) => ({
							indicators: {
								bottom: '-45px',
								// marginBottom: '50px',
								// backgroundColor: theme.colors.violet[9],
							},

							indicator: {
								width: rem(12),
								height: rem(4),
								transition: 'width 250ms ease',
								backgroundColor: '#00acee',
								'&[data-active]': {
									width: rem(40),
									backgroundColor: theme.colors.dark[9],
								},
								'&:not([data-active])': {
									backgroundColor: theme.colors.dark[1],
								},
							},

							controls: {
								padding: '0',
							},

							control: {
								width: '5%',
								fontSize: '2.5rem',
								border: 'none',
								borderRadius: '0',
								boxShadow: 'none',
								color: theme.colors.violet[9],
								backgroundColor: theme.colors.violet[9],
								'&[data-inactive]': {
									opacity: 0.2,
									cursor: 'default',
								},
							},
						})}
					>
						{products.map((product) => (
							<Carousel.Slide key={product._id}>
								<Card
									product={product}
									add={addToCartHandler}
								/>
							</Carousel.Slide>
						))}
					</Carousel>
				</div>

				<div className='third my-20 mx-auto h-full grid gap-20 w-5/6'>
					<div className='grid grid-cols-2'>
						<div className='m-auto'>
							<h5 className='font-semibold leading-8 text-2xl font-opposit tracking-wider w-3/5'>
								HIGH PERFORMANCE MEETS PURPOSE
							</h5>

							<p className='my-4 text-xs font-light tracking-wider leading-2 w-4/5'>
								Clean, cruelty-free products, powered by proven
								ingredients and tested by dermatologists.
							</p>
							<button className='btn-shop w-2/4'>shop now</button>
						</div>

						<div className=''>
							<img src={lid} className='w-[1200px] h-[400px]' />
						</div>
					</div>

					<div className='grid grid-cols-2'>
						<div className='m-auto'>
							<h5 className='font-semibold leading-8 text-2xl font-opposit tracking-wider w-3/5'>
								HIGH PERFORMANCE MEETS PURPOSE
							</h5>

							<p className='my-4 text-xs font-light tracking-wider leading-2 w-4/5'>
								Clean, cruelty-free products, powered by proven
								ingredients and tested by dermatologists.
							</p>
							<button className='btn-shop w-2/4'>shop now</button>
						</div>

						<div className=''>
							<img src={lid} className='w-[1200px] h-[400px]' />
						</div>
					</div>
				</div>

				<h4>frequently asked questions</h4>

				<Accordion
					questions={ut}
					accordion={accordion}
					onToggle={onToggle}
				/>
			</section>
		</Layout>
	);
};

export default HomeScreen;
