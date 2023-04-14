import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import HomeScreen from './pages/Home/HomeScreen';
import Product from './pages/Home/Product';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/' element={<HomeScreen />} />
				<Route path='/product/:id' element={<Product />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
