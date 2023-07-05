import { Instagram, LinkedIn, Twitter } from '../../static/assets/svg/svg';

const Footer = () => {
	return (
		<footer className=' footer w-full mt-16 py-10 px-6 bottom-0 border-t-2 border-black border-solid'>
			<h3 className='uppercase text-sm font-bold'>
				get good skin and exciting emails
			</h3>

			<div className='mb-12 relative flex justify-between items-center'>
				<div className='w-2/5 flex'>
					<input
						type='text'
						className='input w-3/5 mb-0 h-12'
						placeholder='email'
					/>

					<span className='flex justify-center items-center w-1/4 h-12 text-white text-sm tracking-wider bg-black uppercase'>
						sign me up
					</span>
				</div>

				<div className='w-1/5 absolute right-5 m-auto flex justify-between'>
					<a href='' target=''>
						{<Twitter />}
					</a>

					<a href='' target=''>
						{<Instagram />}
					</a>

					<a href='' target=''>
						{<LinkedIn />}
					</a>
				</div>
			</div>

			<div className=' socials w-3/5 m-auto flex justify-center'>
				<a href='' target=''>
					faq
				</a>

				<a href='' target=''>
					contact us
				</a>

				<a href='' target=''>
					terms and conditions
				</a>

				<a href='' target=''>
					privacy policy
				</a>
			</div>

			<span className='block mt-4 text-right text-xxs uppercase tracking-wide'>
				omono. 2023
			</span>
		</footer>
	);
};

export default Footer;
