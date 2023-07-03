import { useRef, useEffect } from 'react';

const loadedScripts = {};

const usePaystack = ({
	amount,
	email,
	onClose,
	onSuccess,
	currency = 'NGN',
	...rest
}) => {
	const loaded = useRef(false);
	const error = useRef(false);

	useEffect(() => {
		const scriptTag = document.getElementById('paystackScript');
		const scriptSrc = scriptTag && scriptTag.getAttribute('src');

		if (scriptSrc) {
			loaded.current = true;
			error.current = false;
			return;
		}

		loadedScripts.src = 'https://js.paystack.co/v1/inline.js';
		const script = document.createElement('script');
		script.id = 'paystackScript';
		script.type = 'application/javascript';
		script.src = 'https://js.paystack.co/v1/inline.js';
		script.async = true;

		const onScriptLoad = () => {
			loaded.current = true;
			error.current = false;
		};

		const onScriptError = () => {
			delete loadedScripts.src;
			loaded.current = true;
			error.current = true;

			throw new Error('Unable to load Paystack modal');
		};

		script.addEventListener('load', onScriptLoad);
		script.addEventListener('complete', onScriptLoad);
		script.addEventListener('error', onScriptError);
		document.body.appendChild(script);

		return () => {
			script.removeEventListener('load', onScriptLoad);
			script.removeEventListener('complete', onScriptLoad);
			script.removeEventListener('error', onScriptError);
		};
	}, []);

	return () => {
		if (error.current) throw new Error('Unable to load Paystack modal');

		if (loaded.current) {
			const paystack =
				window.PaystackPop &&
				window.PaystackPop.setup({
					key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
					email,
					amount: amount * 100,
					currency,
					callback: (response) => onSuccess(response),
					onClose: () => onClose?.(),
					...rest,
				});

			paystack.openIframe();
		}
	};
};

export default usePaystack;
