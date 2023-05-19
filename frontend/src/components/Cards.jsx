import { Link } from 'react-router-dom';
import lip from '../static/assets/images/versed-lips.jpg';

export const Card = ({ product }) => {
	return (
		<Link
			to={`/product/${product._id}`}
			className='card w-full h-full bg-white'
		>
			<img src={product.image} alt='' className='h-3/5' />

			<div className='h-2/5 flex flex-col justify-between'>
				<div className='my-auto'>
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

				<button className='btn-shop font-opposit'>add to bag</button>
			</div>
		</Link>
	);
};

export const Slip = () => {
	return (
		<div className='flex justify-between items-center'>
			<div className='flex w-1/6 h-16 relative'>
				<img src={lip} />

				<span className='text-xs text-center block absolute w-5 h-5 top-[-10px] right-[-10px] rounded-xl bg-black text-white'>1</span>
			</div>

			<p className='text-sm font-bold capitalize font-jetbrains'>versed lips</p>

			<p className=' text-sm font-bold font-jetbrains'>$9.99</p>
		</div>
	);
};
