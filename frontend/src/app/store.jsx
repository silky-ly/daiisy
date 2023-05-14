import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/product.slice';
import counterReducer from '../features/counter/counter.slice';
import cartReducer from '../features/cart/cart.slice';

export const store = configureStore({
	reducer: {
		products: productReducer,
		counter: counterReducer,
		cart: cartReducer,
	},
});
