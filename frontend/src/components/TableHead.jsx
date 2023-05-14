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
		<tr className='table_row grid grid-cols-5 items-center'>
			{headers.map((header, index) => (
				<th
					key={index}
					className='uppercase text-black py-6 font-normal text-sm first:col-span-2 first:bg-sky-400 second:bg-purple-800'
				>
					{header}
				</th>
			))}
		</tr>
	);
};

export const CartData = ({ cartItems }) => {
	return (
		<tr className='w-full grid grid-cols-5 gap-5 items-center text-center p-6 border-b-0.5 border-solid border-black'>
			{cartItems.map((cart, index) => (
				<>
					<td className=''>
						<img src={cart.image} className='' />
					</td>
					<td className='font-bold capitalize font-opposit'>
						{cart.name}
					</td>
					<td className='font-opposit'>{cart.price}</td>
					<td className='font-opposit'>{cart.qty}</td>
				</>
			))}
		</tr>
	);
};
