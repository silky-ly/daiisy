import registerImage from '../../static/assets/one.jpg';

const Register = () => {
	return (
		<>
			<div className='auth'>
				<div className='flex-column'>
					<h3 className=''>Let's create an account for you</h3>
					<form className='w-3/5 flex flex-col justify-between'>
						<input
							type='text'
							name='name'
							value=''
							placeholder='name'
							className='input focus:outline-none focus:border-blue-400'
						/>

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
							placeholder='address'
							className='input focus:outline-none focus:border-blue-400'
						/>

						<input
							type='text'
							name='name'
							value=''
							placeholder='email'
							className='input focus:outline-none focus:border-blue-400'
						/>

						<button className='btn-primary'>register</button>
					</form>
				</div>
				<div className='h-screen w-full'>
					<img src={registerImage} />
				</div>
			</div>
		</>
	);
};

export default Register;
