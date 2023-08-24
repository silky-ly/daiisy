import App from '../App';
import NotFound from '../pages/errors/NotFound';
import Register from '../pages/auth/Register';
import Login from '../pages/auth/Login';
import Profile from '../pages/profile/Profile';
import HomeScreen from '../pages/Home/HomeScreen';
import Shop from '../pages/shop/Shop';
import Product from '../pages/Home/Product';
import Cart from '../pages/cart/Cart';
import CheckOut from '../pages/checkout/CheckOut';

export const Routes = [
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
				index: true,
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
];
