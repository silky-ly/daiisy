const Header = () => {
	return (
		<nav className='w-full m-auto p-6 px-24 bg-white flex justify-between'>
			<div className='nav-wrap w-3/4 flex justify-between'>
				{[
					['Shop', '/shop'],
					['', ''],
					['Daisy', '/'],
					['Cart', '/cart'],
					['About', '/about'],
				].map(([title, path], index) => (
					<a
						key={index}
						href={path}
						className='uppercase text-xs font-semibold tracking-wider cursor-pointer'
					>
						{title}
					</a>
				))}
			</div>

			<div className='link-wrap w-1/12 flex justify-around'>
      <a href='' className='text-xs font-semibold cursor-pointer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='15'
						height='15'
						viewBox='0 0 256 256'
					>
						<path
							fill='#000'
							d='m226.83 221.17l-52.7-52.7a84.1 84.1 0 1 0-5.66 5.66l52.7 52.7a4 4 0 0 0 5.66-5.66ZM36 112a76 76 0 1 1 76 76a76.08 76.08 0 0 1-76-76Z'
						/>
					</svg>
				</a>
        
				<a href='' className='text-xs font-semibold cursor-pointer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='15'
						height='15'
						viewBox='0 0 16 16'
					>
						<path
							fill='#000'
							fillRule='evenodd'
							d='M10.5 5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm.514 2.63a4 4 0 1 0-6.028 0A4.002 4.002 0 0 0 2 11.5V13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.5a4.002 4.002 0 0 0-2.986-3.87ZM8 9H6a2.5 2.5 0 0 0-2.5 2.5V13a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-1.5A2.5 2.5 0 0 0 10 9H8Z'
							clipRule='evenodd'
						/>
					</svg>
				</a>

				<a href='' className='text-xs font-semibold cursor-pointer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='15'
						height='15'
						viewBox='0 0 36 36'
					>
						<path
							fill='#000'
							d='M25 12V9.05a7 7 0 1 0-14 0v7a1 1 0 0 0 2 0V14h8v-2h-8V9.05a5 5 0 1 1 10 0V16a1 1 0 1 0 2 0v-2h5v18H6V14h3v-2H4v20.09A1.91 1.91 0 0 0 5.91 34h24.18A1.91 1.91 0 0 0 32 32.09V12Z'
							className='clr-i-outline clr-i-outline-path-1'
						/>
						<path fill='none' d='M0 0h36v36H0z' />
					</svg>
				</a>
			</div>
		</nav>
	);
};

export default Header;
