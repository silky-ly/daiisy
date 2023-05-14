import { useSelector } from 'react-redux';
import { CartData, Table } from '../../components/TableHead';
import { headers } from '../../data/products';
import Layout from '../../layouts/Layout';

const Cart = () => {
	const cart = useSelector((state) => state.cart);

	return (
		<Layout>
			<section className='cart px-5'>
				<h2 className='font-bolder font-opposit text-2xl uppercase tracking-wider'>
					your bag
				</h2>

				<div>
					<Table
						headers={headers}
						data={<CartData cartItems={cart.cartItems} />}
					/>
				</div>

				<div className='absolute right-5 mt-8 mb-16 w-3/6 text-end'>
					<div className='flex items-baseline justify-end w-full'>
						<p className='uppercase text-xs font-light text-right py-0 mr-2'>
							subtotal
						</p>

						<p className='text-2xl font-bolder font-opposit text-right tracking-widest py-0'>
							$8.99
						</p>
					</div>

					<p className='text-xs font-normal italic my-2'>
						Shipping & taxes calculated at checkout
					</p>

					<div className='grid grid-cols-2 gap-2 items-end'>
						<button className='btn-shop font-opposit'>
							update cart
						</button>

						<button className='btn-shop font-opposit hover:text-black hover:bg-white'>
							checkout  
						</button>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Cart;
