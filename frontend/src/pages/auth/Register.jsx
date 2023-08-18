import Layout from "../../layouts/Layout";

const Register = () => {
	return (
		<Layout>
			<div className='w-full'>
				<div className='w-2/6 m-auto pt-28'>
					<h3 className='capitalize text-lg tracking-tighter'>Let's create an account for you</h3>
					<form className='flex flex-col justify-between'>
						<input
							type='text'
							name='firstname'
							value=''
							placeholder='first name'
							className='input focus:outline-none focus:border-blue-400'
						/>

						<input
							type='text'
							name='lastname'
							value=''
							placeholder='last name'
							className='input focus:outline-none focus:border-blue-400'
						/>

						<input
							type='text'
							name='email'
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

						<p className="text-xs flex items-center mb-4">
							<input className="inline w-[15px] mr-2" type="checkbox" />
							<span>sign up for email updates</span>
							</p>
						<button className='btn-primary'>create</button>
					</form>
				</div>
			</div>
		</Layout>
	);
};

export default Register;
