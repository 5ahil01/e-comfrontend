import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async ({ category, minPrice, maxPrice, sort }, { rejectWithValue }) => {
        try {
            const params = new URLSearchParams();
            if (category) params.append("category", category);
            if (minPrice !== undefined) params.append("minPrice", minPrice);
            if (maxPrice !== undefined) params.append("maxPrice", maxPrice);
            if (sort) params.append("sort", sort);

            const query = params.toString() ? `?${params.toString()}` : "";
            const response = await fetch(`/api/products${query}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to fetch products");
        }
    }
);


const initialState = {
    products: [],
    status: "idle",
    error: null,
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload || "Unknown error";
            });
    },
});