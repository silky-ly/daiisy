import { Link } from 'react-router-dom';
import { Slip } from '../../components/card/Cards';
import { EpArrowLeft } from '../../static/assets/svg/svg';
import usePaystack from '../../hooks/usePaystack';
import lip from '../../static/assets/images/paystack.jpg';

const CheckOut = () => {
	const pay = usePaystack({
		amount: 4000,
		email: 'faithamiekhame@gmail.com',
		onSuccess: ({ reference }) => markAsPaid(reference),
		onClose: () => alert('widget closed'),
	});

	const markAsPaid = (reference) => {
		console.log(reference);
	};

	return (
		<section className='checkout flex w-full p-10'>
			<div className='w-3/5 px-14 border border-t-0 border-l-0 border-b-0 border-r-0.5 border-[#ccc]'>
				<h4>shop daisy</h4>

				<h4>express checkout</h4>
				<div className='w-4/5 mx-auto flex justify-between items-center text-center'>
					<img
						src={lip}
						alt=''
						className='w-1/6 cursor-pointer'
						onClick={pay}
					/>
					<img src={lip} alt='' className='w-1/6' />
					<img src={lip} alt='' className='w-1/6' />
				</div>

				<div></div>

				<div className='line'></div>

				<h3 className='uppercase font-semibold tracking-wide text-lg'>
					shipping address
				</h3>

				<form className=''>
					<select className='input' placeholder='Pick one'>
						<option>u</option>
						<option>w</option>
						<option>f</option>
					</select>

					<div className='grid grid-cols-2 gap-5'>
						<input
							type='text'
							name='firstname'
							placeholder='first name'
							className='input'
						/>

						<input
							type='text'
							name='lastname'
							placeholder='last name'
							className='input'
						/>
					</div>

					<input
						type='text'
						name='address'
						placeholder='address'
						className='input w-full'
					/>

					<div className='grid grid-cols-3 gap-3'>
						<input
							type='text'
							name='address'
							placeholder='address'
							className='input'
						/>

						<select className='input'>
							<option>u</option>
							<option>w</option>
							<option>f</option>
						</select>

						<input
							type='number'
							name='zipcode'
							placeholder='zip code'
							className='input'
						/>
					</div>

					<input
						type='number'
						name='phonenumber'
						placeholder='phone'
						className='input w-full'
					/>
				</form>

				<div className='flex justify-between items-center'>
					<Link
						to='/cart'
						className='w-24 text-xs flex justify-between items-center cursor'
					>
						<span>{<EpArrowLeft />}</span>return to cart
					</Link>

					<button className='btn-shop w-2/6' onClick={pay}>
						continue to shopping
					</button>
				</div>
			</div>

			<div className='w-2/5 pl-10 pr-24'>
				<Slip />

				<div className='line'></div>

				<div className='flex justify-between items-cente mb-3'>
					<p className='capitalize text-[.8rem] text-[#444]'>
						subtotal
					</p>
					<p className='text-xs'>$9.99</p>
				</div>

				<div className='flex justify-between items-center'>
					<p className='text-[.8rem] capitalize text-[#444]'>
						shipping
					</p>
					<p className='text-[.7rem] tracking-tighter text-[#444]'>
						calculated at next step
					</p>
				</div>

				<div className='line'></div>

				<div className='flex justify-between items-center'>
					<p className='text-sm text-[#444] capitalize'>total</p>
					<p className='text-xl font-bold text-[#444]'>$99.99</p>
				</div>
			</div>
		</section>
	);
};

export default CheckOut;
