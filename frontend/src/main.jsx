import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './app/store'
import { Provider } from 'react-redux'
import { MantineProvider } from '@mantine/core';
import './static/css/index.scss';
import { getTotal } from './features/cart/cart.slice';

store.dispatch(getTotal());


ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<App />
		</MantineProvider>
	</Provider>
);
