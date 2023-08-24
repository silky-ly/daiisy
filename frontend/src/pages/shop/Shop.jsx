import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../features/products/product.slice';
import { addItem } from '../../features/cart/cart.slice';
import { ShopAccordion } from '../../components/accordion/Accordion';
import Layout from '../../layouts/Layout';
import lid from '../../static/assets/images/mo.jpg';

const Shop = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const [accordion, setAccordion] = useState(false);

	const { isLoading, isSuccess, isError, message, products } = useSelector(
		(state) => state.products
	);

	const ut = [
		{
			_id: '1',
			question: 'shop all',
			// answer: [
			// 	'sale & offer',
			// 	'new arrival',
			// 	'best sellers',
			// 	'bundles',
			// 	'merch + tools',
			// 	'travel size',
			// ],
		},
		// {
		// 	_id: '2',
		// 	question: 'by concern',
		// 	answer: [
		// 		'all skin types',
		// 		'aging skin',
		// 		'acne-prone',
		// 		'dullness',
		// 		'dryness',
		// 	],
		// },
		// {
		// 	_id: '3',
		// 	question: 'by category',
		// 	answer: [
		// 		'facial cleansers',
		// 		'toners',
		// 		'serum',
		// 		'eye & lip care',
		// 		'mask & treatment',
		// 		'body care',
		// 		'moisturizers & spf',
		// 	],
		// },
		// {
		// 	_id: '4',
		// 	question: 'by ingredient',
		// 	answer: [
		// 		'retinol',
		// 		'salicylic acid',
		// 		'vitamin c',
		// 		'hyaluronic acid',
		// 		'niacinamide',
		// 		'vitamin e',
		// 		'lactic acid',
		// 	],
		// },
	];

	const addToCartHandler = (product) => {
		dispatch(addItem(product));
		console.log('PRODUCT::: ', product);
		navigate(`/cart`);
	};

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
			<section className='auto'>
				<div className='h-[400px] w-full'>
					<img src={lid} alt='' className='' />
				</div>

				<section className='bg-purple-500 grid grid-cols-6 my-20'>
					<aside className='col-span-1 w-10/12 m-auto'>
						<h4 className='text-left'>all</h4>
						<div>
							<ShopAccordion
								shop={ut}
								accordion={accordion}
								onToggle={onToggle}
							/>
						</div>
					</aside>

					<main className='bg-purple-400 col-span-5 p-5'>
						<div className='grid grid-cols-3 gap-10'>
							{products.map((product) => (
								<div
									className='card flex flex-col bg-green-400'
									key={product._id}
								>
									<Link
										to={`/product/${product._id}`}
										className='bg-purple-300'
									>
										<h4>daisy</h4>
										{/* <img
										src={product.image}
										alt=''
										className='h-2/4'
									/> */}

										<div className='flex flex-col justify-between'>
											<p className='font-jetbrains text-xs font-normal uppercase tracking-wide leading-6'>
												{product.category}
											</p>

											<p className='text-xs font-semibold uppercase tracking-wide leading-6 font-opposit'>
												{product.name}
											</p>

											<p className=' text-xs font-semibold uppercase tracking-wide leading-6 font-opposit'>
												{`$ ${product.price}`}
											</p>
										</div>
									</Link>

									<button
										className='btn-shop font-opposit'
										onClick={() =>
											addToCartHandler(product)
										}
									>
										add to bag
									</button>
								</div>
							))}
						</div>
					</main>
				</section>
			</section>
		</Layout>
	);
};

export default Shop;
