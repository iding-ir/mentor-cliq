import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IEmployee } from "../../types";

export interface State {
  wizard: IEmployee;
}

const initialState: State = {
  wizard: {
    firstName: "",
    lastName: "",
    email: "",
    gender: "n/a",
    department: "",
    jobTitle: "",
    country: "",
    city: "",
  },
};

export const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addToWizard: (state, action: PayloadAction<object>) => {
      state.wizard = { ...state.wizard, ...action.payload };
    },
    clearWizard: (state) => {
      state.wizard = initialState.wizard;
    },
  },
});

export const { addToWizard, clearWizard } = slice.actions;

export const selectProfile = (state: RootState) => state.profile;

export default slice.reducer;
