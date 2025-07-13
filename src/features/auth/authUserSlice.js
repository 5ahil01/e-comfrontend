import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const authUser = createAsyncThunk(
  "auth/login",
  async ({ authType, role, formData }, thunkApi) => {
    try {
      const response = await fetch(`http://localhost:3000/api/${role}/${authType}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login Failed");
      }

      const data = await response.json();

      return { role, data };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: null,
  role: null,
  error: null,
  isAuth: false,
  loading: false,
};

export const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.role = action.payload.role;
        state.isAuth = true;
      })
      .addCase(authUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authUser.reducer;
