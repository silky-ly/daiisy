import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartData, Table } from '../../components/table/TableHead';
import { headers } from '../../data/products';
import Layout from '../../layouts/Layout';
import {
	addItem,
	clearCart,
	decreaseQuantity,
	getTotal,
	removeItem,
} from '../../features/cart/cart.slice';

const Cart = () => {
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);

	console.log('CART::: ', cart, cart.cartItems);

	const { count } = useSelector((state) => state.counter);

	const handleRemoveItem = (cartItem) => {
		dispatch(removeItem(cartItem));
	};

	const handleDecreaseQuantity = (cartItem) => {
		dispatch(decreaseQuantity(cartItem));
	};

	const handleIncreaseQuantity = (cartItem) => {
		dispatch(addItem(cartItem));
	};

	useEffect(() => {
		dispatch(getTotal());
	}, [cart]);

	return (
		<Layout>
			<section className='cart px-5 w-full h-full relative'>
				<h2 className='font-bolder font-opposit text-2xl uppercase tracking-wider'>
					your bag
				</h2>

				<div>
					<Table
						headers={headers}
						data={
							<CartData
								cartItems={cart.cartItems}
								remove={handleRemoveItem}
								decrease={handleDecreaseQuantity}
								increase={handleIncreaseQuantity}
							/>
						}
					/>
				</div>

				<div className='cart-summary relative flex justify-between h-auto mt-8 mb-16'>
					<span
						onClick={() => dispatch(clearCart(cart.cartItems))}
						className='text-sm font-opposit capitalize cursor-pointer'
					>
						clear cart
					</span>
					<div className='w-2/5 text-end'>
						<div className='flex items-baseline justify-end w-full'>
							<p className='uppercase text-xs font-light text-right py-0 mr-2'>
								subtotal
							</p>

							<p className='text-2xl font-bolder font-opposit text-right tracking-widest py-0'>
								{cart.cartTotalAmount}
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
				</div>
			</section>
		</Layout>
	);
};

export default Cart;
