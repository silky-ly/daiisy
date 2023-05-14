import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: localStorage.getItem('cartItems')
		? JSON.parse(localStorage.getItem('cartItems'))
		: [],
	cartQty: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action) => {
			const itemExists = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);

			if (itemExists >= 0) {
				state.cartItems[itemExists].qty += 1;
				alert('added +1');
			} else {
				state.cartItems.push({ ...action.payload, qty: 1 });
				alert('added!!!');
			}

			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
	},
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
