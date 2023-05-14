import { EpArrowLeft } from "../../static/assets/svg/svg";

const CheckOut = () => {
	return (
		<section className='checkout flex w-full p-10'>
			<div className='w-3/5 px-14 border border-t-0 border-l-0 border-b-0 border-r-0.5 border-[#ccc]'>
				<h3 className='font-jetbrains uppercase font-semibold tracking-wide text-lg bg-lime-300'>
					shipping address
				</h3>

				<form className=''>
					<select className="">
						<option>u</option>
						<option>w</option>
						<option>f</option>
					</select>

					<div className='grid grid-cols-2 gap-5'>
						<input
							name='firstname'
							value=''
							placeholder='first name'
							className='input'
						/>

						<input
							name='lastname'
							value=''
							placeholder='last name'
							className='input'
						/>
					</div>

					<input
						name='address'
						value=''
						placeholder='address'
						className='input w-full'
					/>

					<div className='grid grid-cols-3 gap-3'>
						<input
							name='address'
							value=''
							placeholder='address'
							className='input'
						/>

						<select>
							<option>u</option>
							<option>w</option>
							<option>f</option>
						</select>

						<input
							type='number'
							name='zipcode'
							value=''
							placeholder='zip code'
							className='input'
						/>
					</div>

					<input
						type='number'
						name='phonenumber'
						value=''
						placeholder='phone'
						className='input w-full'
					/>
				</form>

				<div className='flex justify-between items-center'>
					<p className="w-24 text-xs flex justify-between items-center"><span>{<EpArrowLeft />}</span>return to cart</p>

					<button className='btn-shop w-2/6'>continue to shopping</button>
				</div>
			</div>

			<div className='bg-red-400 w-2/5'>
				<li>items</li>

				<div className='line my-8 w-full border-b-0.5 border-black'></div>

				<div className="flex justify-between bg-purple-300">
					<p>subtotal</p>
					<p>$9.99</p>
				</div>

				<div className="bg-green-400 flex justify-between">
					<p>shipping</p>
					<p>calculatedat next step</p>
				</div>

				<div className='line my-8 w-full border-b-0.5 border-black'></div>

				<div className="bg-purple-700 flex justify-between">
					<p>total</p>
					<p>$99.99</p>
				</div>
			</div>
		</section>
	);
};

export default CheckOut;
