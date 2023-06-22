import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: localStorage.getItem('cartItems')
		? JSON.parse(localStorage.getItem('cartItems'))
		: [],
	cartQty: 0,
	cartTotal: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action) => {
			const itemExists = state.cartItems.findIndex((item) => {
				return item._id === action.payload._id;
			});

			if (itemExists >= 0) {
				state.cartItems[itemExists].qty += 1;
				alert('added +1');
			} else {
				state.cartItems.push({ ...action.payload, qty: 1 });
				alert('added!!!');
			}

			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		removeItem: (state, action) => {
			const removeItem = state.cartItems.filter(
				(cartItem) => cartItem._id !== action.payload._id
			);

			state.cartItems = removeItem;

			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		decreaseQuantity: (state, action) => {
			const itemExists = state.cartItems.findIndex((item) => {
				return item._id === action.payload._id;
			});

			if (state.cartItems[itemExists].qty > 1) {
				state.cartItems[itemExists].qty -= 1;
			} else if (state.cartItems[itemExists].qty === 1) {
				const removeItem = state.cartItems.filter(
					(cartItem) => cartItem._id !== action.payload._id
				);

				state.cartItems = removeItem;

				localStorage.setItem(
					'cartItems',
					JSON.stringify(state.cartItems)
				);
			}
		},
		clearCart: (state, action) => {
			state.cartItems = [];
			alert('cart cleared!!!');
		},
	},
});

export const { addItem, removeItem, decreaseQuantity, clearCart } =
	cartSlice.actions;

export default cartSlice.reducer;
