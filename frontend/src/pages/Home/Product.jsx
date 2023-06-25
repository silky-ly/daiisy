import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById } from '../../features/products/product.slice';
import { decrement, increment } from '../../features/counter/counter.slice';
import { addItem, decreaseQuantity } from '../../features/cart/cart.slice';
import Layout from '../../layouts/Layout';

const Product = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const { product } = useSelector((state) => state.products);

	const { count } = useSelector((state) => state.counter);

	const { id } = useParams();

	useEffect(() => {
		console.log(id, 'id');
		dispatch(getProductById(id));
	}, [id]);

	const addToCartHandler = (product) => {
		dispatch(addItem(product));
		navigate(`/cart`);
		// navigate(`/cart/${id}?qty=${count}`);
	};

	return (
		<Layout>
			<section className='product h-auto w-11/12 m-auto mt-5 flex justify-between gap-16 bg-blue-100'>
				<div className='h-full w-3/5'>
					<img src={product?.image} className='' />

					<div className='carousel'>hhhsgvsgxdv</div>
				</div>

				<div className='py-8 px-10 bg-purple-100 w-2/5'>
					<p className='text-sm font-normal uppercase tracking-wide leading-6'>
						{product?.caption}
					</p>
					<p className='text-sm font-semibold uppercase tracking-wide leading-6'>
						{product?.name}
					</p>

					<span className='block my-8 text-xs font-light'>
						{product?.narration}
					</span>

					<p className='my-5 text-lg font-semibold uppercase tracking-wide'>
						$ {product?.price}
					</p>

					<p className='mb-5 text-xs font-normal tracking-wide text-slate-500'>
						{product?.countInStock > 0
							? 'In Stock'
							: 'Out of stock'}
					</p>

					{product?.countInStock > 0 && (
						<div className='w-3/5 grid grid-cols-3 gap-1'>
							<div className='flex justify-between items-center border-0.5 border-solid border-black px-4'>
								{/* <button
									className=''
									onClick={() => dispatch(decrement())}
								>
									-
								</button>

								<span className=''>{count}</span>

								<button
									className=''
									onClick={() => dispatch(increment())}
								>
									+
								</button> */}

								<button
									className=''
									onClick={() =>
										dispatch(decreaseQuantity(product))
									}
								>
									-
								</button>

								<span className=''>{product.qty}</span>

								<button
									className=''
									onClick={() => dispatch(addItem(product))}
								>
									+
								</button>
							</div>
							<button
								className='btn-shop col-span-2'
								disabled={product?.countInStock === 0}
								onClick={() => addToCartHandler(product)}
							>
								add to bag
							</button>
						</div>
					)}

					<div className='mt-8'>
						<span className='block text-xs font-normal'>
							category:{' '}
							<Link
								to='/skincare'
								className='font-light text-black font-semibold'
							>
								{product?.category}
							</Link>{' '}
						</span>
						<span className='block text-xs font-normal'>
							brand:{' '}
							<a
								href='https://versedskin.com'
								className='font-light text-black font-semibold'
							>
								{product?.brand}
							</a>{' '}
						</span>
					</div>

					<div className='line my-8 w-full border-b-0.5 border-black'></div>

					<div>
						<p className='text-xs font-light leading-6'>
							{product?.description}
						</p>

						<div className='tabs flex my-8'>
							<p className='tab w-1/5 pb-2 text-xs font-semibold uppercase border-slate-400 border-b-0.5 border-r-0.5'>
								how to use
							</p>
							<p className='tab w-1/5 pb-2 text-xs font-semibold uppercase border-slate-400 border-b-0.5 border-r-0.5'>
								ingredients
							</p>
						</div>

						<div>
							<p>vlamdir koshevkhi</p>
						</div>
						<div>
							<p>alias ysolvif</p>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Product;
