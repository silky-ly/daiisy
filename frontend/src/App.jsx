import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import HomeScreen from './pages/Home/HomeScreen';
import Product from './pages/Home/Product';
import Cart from './pages/cart/Cart';
import CheckOut from './pages/checkout/CheckOut';
import Shop from './pages/shop/Shop';
import Profile from './pages/profile/Profile';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/' element={<HomeScreen />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/product/:id' element={<Product />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/checkout' element={<CheckOut />} />
				{/* <Route path='/cart/:id' element={<Cart />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
