import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import './static/css/index.scss';
import { getTotal } from './features/cart/cart.slice';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

store.dispatch(getTotal());

ReactDOM.createRoot(document.getElementById('root')).render(
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<MantineProvider withGlobalStyles withNormalizeCSS>
				<App />
			</MantineProvider>
		</Provider>
	</QueryClientProvider>
);
