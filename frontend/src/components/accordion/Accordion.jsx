import React from 'react';

const Accordion = ({ questions, accordion }) => {

	return (
		<div className='bg-blue-300 w-2/4 m-auto'>
			{questions.map((q, index) => {
				return (
					<div
						onClick={() => onToggle(index)}
						key={q}
						className='w-3/4 m-auto bg-purple-700'
					>
						<div className='flex items-center justify-between bg-green-600'>
							<h4 className='bg-pink-600'>{q.question}</h4>
							<h4 className='bg-blue-600'>
								{accordion === index ? '-' : '+'}
							</h4>
						</div>

						{accordion === index ? (
							<span>{q.answer}</span>
						) : null}
					</div>
				);
			})}
		</div>
	);
};

export default Accordion;
