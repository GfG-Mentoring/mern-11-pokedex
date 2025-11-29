import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signinApi, signupApi } from '../apis/authApis';
import { isAxiosError } from 'axios';

export const signup = createAsyncThunk(
  'auth/signup',
  async (payload: {
    name: string;
    email: string;
    password: string;
    onSuccess: () => void;
  }) => {
    try {
      await signupApi(payload.name, payload.email, payload.password);
      payload.onSuccess?.();
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      } else {
        throw error;
      }
    }
  }
);

export const signin = createAsyncThunk(
  'auth/signin',
  async (payload: {
    email: string;
    password: string;
    onSuccess: () => void;
  }) => {
    try {
      const response = await signinApi(payload.email, payload.password);
      payload.onSuccess?.();
      return response.data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      } else {
        throw error;
      }
    }
  }
);

const authInitialState = {
  signupLoading: false,
  signupError: '',
  signinLoading: false,
  signinError: '',
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state) => {
      state.signupLoading = false;
    });
    builder.addCase(signup.rejected, (state, action) => {
      console.log(action);
      state.signupError = action.error.message ?? 'Something went wrong';
      state.signupLoading = false;
    });
    builder.addCase(signup.pending, (state) => {
      state.signupLoading = true;
      state.signupError = '';
    });
    builder.addCase(signin.rejected, (state, action) => {
      state.signinError = action.error.message ?? 'Something went wrong';
      state.signinLoading = false;
    });
    builder.addCase(signin.pending, (state) => {
      state.signinLoading = true;
      state.signinError = '';
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
  },
});

export const authReducer = authSlice.reducer;
