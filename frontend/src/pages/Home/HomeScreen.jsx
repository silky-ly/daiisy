import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';
import { EpArrowLeft, EpArrowRight } from '../../static/assets/svg/svg';
import { getProducts } from '../../features/todos/product.slice';
import Layout from '../../layouts/Layout';
import Card from '../../components/Cards';
import Two from '../../static/assets/images/two.jpg';

const HomeScreen = () => {
	const dispatch = useDispatch();

	const { isLoading, isSuccess, isError, message, products } = useSelector(
		(state) => state.products
	);

	useEffect(() => {
		isError ? message : isSuccess ? message : null;

		dispatch(getProducts());
	}, [isSuccess, isError, message, dispatch]);

	return (
		<Layout>
			<section className='homepage h-screen w-full'>
				<div className='h-5/6 relative'>
					<img src={Two} />
					<div className='inset-x-2/3 absolute top-2/4 w-1/4'>
						<p className='sub-head-p'>
							get your hydrating milk cleanser <br />
						</p>

						<button className='btn-shop w-3/4'>shop now</button>
					</div>
				</div>

				<div className='mt-16 px-8 h-auto relative'>
					<h4 className='sub-head-4'>shop top sellers</h4>

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
								<Card product={product} />
							</Carousel.Slide>
						))}
					</Carousel>
				</div>

				<div className='third mt-12 grid gap-10'>
					<div className='grid grid-cols-2 grid-flow-col-dense'>
						<div className='w-2/4 m-auto'>
							<h5 className='font-semibold leading-8 text-xl'>
								HIGH PERFORMANCE MEETS PURPOSE
							</h5>
							<p className='my-4 text-xs font-light tracking-widest leading-2'>
								Clean, cruelty-free products, powered by proven
								ingredients and tested by dermatologists.
							</p>
							<button className='btn-shop'>shop now</button>
						</div>
						<img src={Two} className='' />
					</div>

					<div className='grid grid-cols-2'>
						<div className='w-2/4 m-auto'>
							<h5 className='font-semibold leading-8 text-xl'>
								HIGH PERFORMANCE MEETS PURPOSE
							</h5>
							<p className='my-4 text-xs font-light tracking-widest leading-2'>
								Clean, cruelty-free products, powered by proven
								ingredients and tested by dermatologists.
							</p>
							<button className='btn-shop'>shop now</button>
						</div>
						<img src={Two} className='' />
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default HomeScreen;
