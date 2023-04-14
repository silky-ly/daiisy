import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productService from '../../services/product.service';

export const getProducts = createAsyncThunk(
	'/products',
	async (_, thunkAPI) => {
		try {
			return await productService.getAllProducts();
		} catch (err) {
			const mssg =
				(err.response &&
					err.response.data &&
					err.response.data.message) ||
				err.message ||
				err.toString();
			return thunkAPI.rejectWithValue(mssg);
		}
	}
);

export const getProductById = createAsyncThunk(
	'/product/id',
	async (id, thunkAPI) => {
		try {
			return await productService.getProductDetails(id);
		} catch (err) {
			const mssg =
				(err.response &&
					err.response.data &&
					err.response.data.message) ||
				err.message ||
				err.toString();
			return thunkAPI.rejectWithValue(mssg);
		}
	}
);

const initialState = {
	products: [],
	isLoading: 'false',
	isSuccess: 'false',
	isError: 'false',
	message: '',
};

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.products = action.payload;
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getProductById.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProductById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.products = state.products.filter((product) => {
					product._id === action.payload.id;
					// return { product };
				});
				// state.products = newProduct;
			})
			.addCase(getProductById.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = productSlice.actions;

export default productSlice.reducer;
