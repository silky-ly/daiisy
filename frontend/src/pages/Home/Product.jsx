import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../../features/products/product.slice';
import Layout from '../../layouts/Layout';

const Product = () => {
	const dispatch = useDispatch();

	const { id } = useParams();

	useEffect(() => {
		console.log(id, 'id');
		dispatch(getProductById(id));
	}, [id]);

	const product = useSelector((state) => {
		console.log(state, 'state');
		return state.products.product;
	});

	console.log(product, '...product');

	// console.log(state, 'state');

	// console.log(id, 'id');

	return (
		<Layout>
			<section className='product h-auto w-11/12 m-auto mt-5 grid grid-cols-2 gap-16 bg-indigo-400'>
				<div className='bg-purple-500'>
					<img src={product?.image} />

					<div className='carousel'>hhhsgvsgxdv</div>
				</div>

				<div className='py-8 px-10 bg-blue-100'>
					<p className='text-sm font-normal uppercase tracking-wide leading-6'>
						{product?.brand} brand
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

					<div className='w-2/4 grid grid-cols-3 gap-1'>
						<button className='btn-shop'>1</button>
						<button
							className='btn-shop col-span-2'
							disabled={product?.countInStock === 0}
						>
							add to bag
						</button>
					</div>

					<div className='mt-8'>
						<span className='block text-xs font-normal'>
							category:{' '}
							<Link
								to='/skincare'
								className='font-light text-blue-700'
							>
								{product?.category}
							</Link>{' '}
						</span>
						<span className='block text-xs font-normal'>
							brand:{' '}
							<a
								href='https://versedskin.com'
								className='font-light text-blue-700'
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

						<ul className='my-8'>
							<li className='w-1/5 pb-2 text-xs font-semibold uppercase border-slate-400 border-b-0.5 border-r-0.5'>
								<a href=''>how to use</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Product;
