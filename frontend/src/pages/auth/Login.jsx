import registerImage from '../../static/assets/one.jpg';

const Login = () => {
	return (
		<>
			<div className='auth'>
				<div className='flex-column'>
					<h3 className=''>Let's log you in...</h3>
					<form className='w-3/5 flex flex-col justify-between'>
						<input
							type='text'
							name='name'
							value=''
							placeholder='email'
							className='input focus:outline-none focus:border-blue-400'
						/>

						<input
							type='text'
							name='name'
							value=''
							placeholder='password'
							className='input focus:outline-none focus:border-blue-400'
						/>

						<button className='btn-primary'>log in</button>
					</form>
				</div>
				<div className='h-screen w-full'>
					<img src={registerImage} />
				</div>
			</div>
		</>
	);
};

export default Login;
