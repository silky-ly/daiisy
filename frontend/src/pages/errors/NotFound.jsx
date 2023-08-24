import { useRouteError } from 'react-router-dom';

const NotFound = () => {
	const error = useRouteError;
	console.error('ERROR::: ', error);

	return (
		<div>
			<h3>Page not found. Try again</h3>
            <i>{error.statusText || error.message}</i>
		</div>
	);
};

export default NotFound;
