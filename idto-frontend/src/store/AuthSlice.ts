import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  email: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  email: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string | null>) {
      state.email = action.payload;
    },
    setAuthentication(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    logout(state) {
      ((state.email = null), (state.isAuthenticated = false));
    },
  },
});
export const { setEmail, setAuthentication, logout } = authSlice.actions;
export default authSlice.reducer;
