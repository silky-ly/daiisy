import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getTotal } from './features/cart/cart.slice';
import App from './App';
import NotFound from './pages/errors/NotFound';
import CheckOut from './pages/checkout/CheckOut';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Profile from './pages/profile/Profile';
import HomeScreen from './pages/Home/HomeScreen';
import Shop from './pages/shop/Shop';
import Product from './pages/Home/Product';
import Cart from './pages/cart/Cart';
import './static/css/index.scss';

const queryClient = new QueryClient();
store.dispatch(getTotal());

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: 'register',
				element: <Register />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'profile',
				element: <Profile />,
			},
			{
				path: 'home',
				element: <HomeScreen />,
			},
			{
				path: 'collections/:id',
				element: <Shop />,
			},
			{
				path: 'product/:id',
				element: <Product />,
			},
			{
				path: 'cart',
				element: <Cart />,
			},
			{
				path: 'checkout',
				element: <CheckOut />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<MantineProvider withGlobalStyles withNormalizeCSS>
				<RouterProvider router={router} />
			</MantineProvider>
		</Provider>
	</QueryClientProvider>
);
