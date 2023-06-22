export const Table = ({ headers, data }) => {
	return (
		<table className='block'>
			<thead className='border border-y-0.5 border-x-0 border-solid border-black'>
				<TableHead headers={headers} />
			</thead>

			<tbody className='w-full'>{data}</tbody>
		</table>
	);
};

export const TableHead = ({ headers }) => {
	return (
		<tr className='table_row grid grid-cols-5 items-center w-full'>
			{headers.map((header, index) => (
				<th
					key={index}
					className='uppercase text-black py-6 font-normal text-sm first:col-span-2'
				>
					{header}
				</th>
			))}
		</tr>
	);
};

export const CartData = ({ cartItems, remove, decrease, increase }) => {
	return cartItems?.map((cart) => (
		<tr
			key={cart._id}
			className='w-full grid grid-cols-5 gap-5 items-center text-center p-6 border-b-0.5 border-solid border-black'
		>
			<td className=''>
				<img src={cart.image} alt={cart.image} className='' />
			</td>
			<td className=''>
				<p className='font-bold capitalize font-opposit'>{cart.name}</p>{' '}
				<button
					className='uppercase text-[0.6rem]'
					onClick={() => remove(cart)}
				>
					remove
				</button>
			</td>
			<td className='font-opposit'>{cart.price}</td>
			<td className='font-opposit w-full'>
				<div className='flex justify-between items-center px-4'>
					<button className='' onClick={() => decrease(cart)}>
						-
					</button>

					<span className=''>{cart.qty}</span>

					<button className='' onClick={() => increase(cart)}>
						+
					</button>
				</div>
			</td>
			<td className='font-opposit'>{cart.price * cart.qty}</td>
		</tr>
	));
};
