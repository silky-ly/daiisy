import { Link } from 'react-router-dom';
import lip from '../static/assets/images/versed-lips.jpg';

export const Card = ({ product, add }) => {
	return (
		<div className='card w-full h-full flex flex-col'>
			<Link to={`/product/${product._id}`} className='h-full'>
				<img src={product.image} alt='' className='h-3/4' />

				<div className='flex flex-col justify-between h-1/4'>
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
				onClick={() => add(product)}
			>
				add to bag
			</button>
		</div>
	);
};

export const Slip = () => {
	return (
		<div className='flex justify-between items-center'>
			<div className='flex w-1/6 h-16 relative'>
				<img src={lip} />

				<span className='text-xs text-center block absolute w-5 h-5 top-[-10px] right-[-10px] rounded-xl bg-black text-white'>
					1
				</span>
			</div>

			<p className='text-sm font-bold capitalize font-jetbrains'>
				versed lips
			</p>

			<p className=' text-sm font-bold font-jetbrains'>$9.99</p>
		</div>
	);
};
