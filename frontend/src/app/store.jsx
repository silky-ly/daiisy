import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/todos/product.slice';

export const store = configureStore({
	reducer: {
		products: productReducer,
	},
});
