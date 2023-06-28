import { useEffect, useState } from 'react';
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

	const [show, setShow] = useState(1);

	const toggleTabs = (index) => {
		setShow(index);
	};

	useEffect(() => {
		console.log(id, 'id');
		dispatch(getProductById(id));
	}, [id]);

	const addToCartHandler = (product) => {
		dispatch(addItem(product));
		navigate(`/cart`);
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
								className='text-black font-semibold'
							>
								{product?.category}
							</Link>{' '}
						</span>
						<span className='block text-xs font-normal'>
							brand:{' '}
							<a
								href='https://versedskin.com'
								className='text-black font-semibold'
							>
								{product?.brand}
							</a>{' '}
						</span>
					</div>

					<div className='line my-8 w-full border-b-0.5 border-black'></div>

					<div className=''>
						<p className='text-xs font-light leading-6'>
							{product?.description}
						</p>

						<div className='too flex my-8 border-b-0.5 border-slate-400'>
							<p
								onClick={() => toggleTabs(1)}
								className={
									show === 1 ? 'tabs active-tab' : 'tabs'
								}
							>
								how to use
							</p>

							<p
								onClick={() => toggleTabs(2)}
								className={
									show === 2 ? 'tabs active-tab' : 'tabs'
								}
							>
								ingredients
							</p>

							<p
								onClick={() => toggleTabs(3)}
								className={
									show === 3 ? 'tabs active-tab' : 'tabs'
								}
							>
								recycle
							</p>
						</div>

						<div>
							<p
								className={
									show === 1 ? 'active-content' : 'content'
								}
							>
								<span className='font-semibold'>HOW:</span> Apply a thin, even layer to
								clean, dry skin and rinse with cool water after
								2-3 minutes. Do not leave on for more than 3
								minutes, and avoid using other acid-based
								products and retinoids for 24 hours before and
								after each use.<br />
								<span className='font-semibold'>WHERE:</span> Entire face, avoiding eye
								area.<br />
								<span className='font-semibold'>WHEN:</span>Once a week, ideally at
								night, after cleansing (and toning) but before
								moisturizing. See full results in four uses, and
								continue using the resurfacing mask weekly to
								maintain them.<br />
								<span className='font-semibold'>OOD TO KNOW:</span>G Skin may appear
								slightly pink after usage. This is completely
								normal and should subside shortly. However, if
								your skin is on the sensitive side, this
								resurfacing mask may not be right for you. Start
								with a patch test of 60-90 seconds to see if
								your skin tolerates the product. Or try The
								Shortcut Overnight Facial Peel, a gentler
								option, instead. <br />
								Use within 6 months once
								opened.
							</p>
							<p
								className={
									show === 2 ? 'active-content' : 'content'
								}
							>
								alias ysolvif
							</p>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Product;
