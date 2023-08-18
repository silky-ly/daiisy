import Layout from '../../layouts/Layout';

const Login = () => {
	return (
		<Layout>
			<div className='w-full'>
				<div className='w-2/6 m-auto pt-28'>
					<h3 className='capitalize text-lg tracking-tighter'>
						Let's log you in...
					</h3>
					<form className='flex flex-col justify-between'>
						<input
							type='text'
							name='name'
							value=''
							placeholder='email'
							className='input focus:outline-none focus:border-blue-400'
						/>

						<input
							type='text'
							name='password'
							value=''
							placeholder='password'
							className='input focus:outline-none focus:border-blue-400'
						/>

						<button className='btn-primary'>log in</button>
						<button className='relative mt-4 uppercase text-xs tracking-tighter'>
							create account
						</button>
					</form>
				</div>
			</div>
		</Layout>
	);
};

export default Login;
