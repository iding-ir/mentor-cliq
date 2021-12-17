import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getLogin, getLogout } from "./api";

export interface State {
  user: any;
  isLoggedIn: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: State = {
  user: "",
  isLoggedIn: false,
  status: "idle",
};

export const login = createAsyncThunk("auth/login", async () => {
  return await getLogin();
});

export const logout = createAsyncThunk("auth/logout", async () => {
  return await getLogout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(logout.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = {};
        state.isLoggedIn = false;
      });
  },
});

// export const {} = authSlice.actions;

export const selectUser = (state: RootState) => state.auth;

export default authSlice.reducer;
