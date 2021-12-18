import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ISignIn, ISignUp } from "../../types";
import { getSignIn, getSignOut, getSignUp } from "./api";

export interface State {
  user: ISignIn;
  isLoggedIn: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: State = {
  user: { email: null, password: null },
  isLoggedIn: false,
  status: "idle",
};

export const signIn = createAsyncThunk("auth/signIn", async (data: ISignIn) => {
  return await getSignIn(data);
});

export const signOut = createAsyncThunk("auth/signOut", async () => {
  return await getSignOut();
});

export const signUp = createAsyncThunk("auth/signUp", async (data: ISignUp) => {
  return await getSignUp(data);
});

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload as ISignIn;
        state.isLoggedIn = true;
      })
      .addCase(signOut.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = {} as ISignIn;
        state.isLoggedIn = false;
      })
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload as ISignIn;
        state.isLoggedIn = true;
      });
  },
});

// export const {} = slice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default slice.reducer;
