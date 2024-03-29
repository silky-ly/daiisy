import { Link } from 'react-router-dom';

export const Accordion = ({ questions, accordion, onToggle }) => {
	return (
		<div className='w-2/4 m-auto'>
			{questions.map((q, index) => {
				return (
					<div
						className='w-3/4 m-auto border-b-0.5 border-black'
						onClick={() => onToggle(index)}
						key={q._id}
					>
						<div className='flex items-center justify-between h-[50px]'>
							<h4 className='mb-0 '>{q.question}</h4>
							<span className='w-1/12 text-[0.8rem] text-center cursor-pointer'>
								{accordion === index ? '-' : '+'}
							</span>
						</div>

						{accordion === index ? (
							<span className='text-[0.8rem]'>{q.answer}</span>
						) : null}
					</div>
				);
			})}
		</div>
	);
};

export const ShopAccordion = ({ shop, accordion, onToggle }) => {
	return (
		<div className='shop-accordion'>
			{shop.map((q, index) => {
				return (
					<Link
						to={`collections/${q.question}`}
						onClick={() => onToggle(index)}
						className='m-auto border-b-0.5 border-black'
						key={q._id}
					>
						<div className='flex items-center justify-between h-[50px]'>
							<h4 className='mb-0'>{q.question}</h4>
							<span className='w-1/12 text-[0.8rem] text-center'>
								{accordion === index ? 'x' : '+'}
							</span>
						</div>

						{accordion === index
							? q.answer.map((x) => {
									return (
										<a
											key={x}
											href=''
											className=' active:font-bold block w-3/6 ml-6 capitalize text-[0.8rem] leading-7 tracking-wide cursor-pointer relative before:content-["_"] before:absolute before:w-full before:h-[1px] before:bg-black before:left-0 before:bottom-0 before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:ease-linear hover:before:origin-left hover:before:scale-x-100 last:mb-4'
										>
											{x}
										</a>
									);
							  })
							: null}
					</Link>
				);
			})}
		</div>
	);
};
