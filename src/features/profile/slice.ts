import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface State {
  wizard: any;
}

const initialState: State = {
  wizard: {},
};

export const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addToWizard: (state, action: PayloadAction<object>) => {
      state.wizard = { ...state.wizard, ...action.payload };
    },
  },
});

export const { addToWizard } = slice.actions;

export const selectProfile = (state: RootState) => state.profile;

export default slice.reducer;
