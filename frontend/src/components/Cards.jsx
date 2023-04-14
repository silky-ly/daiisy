import { Link } from "react-router-dom";

const Card = ({ product }) => {
	return (
		<Link to={`/product/${product._id}`} className='card w-full h-full bg-white'>
			<img src={product.image} alt='' className='h-3/5' />

			<div className='h-2/5 flex flex-col justify-between'>
				<div className='my-auto'>
					<p className='font-jetbrains text-xs font-normal uppercase tracking-wide leading-6'>
						{product.category}
					</p>

					<p className='text-xs font-semibold uppercase tracking-wide leading-6'>
						{product.name}
					</p>

					<p className=' text-xs font-semibold uppercase tracking-wide leading-6'>
						{`$ ${product.price}`}
					</p>
				</div>

				<button className='btn-shop'>add to bag</button>
			</div>
		</Link>
	);
};

export default Card;
