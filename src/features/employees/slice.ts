import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getEmployees } from "./api";

export interface State {
  all: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: State = {
  all: [],
  status: "idle",
};

export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async () => {
    const data = await getEmployees();

    return data.reduce((total: any, current: any) => {
      return { ...total, [current.email]: current };
    }, {});
  }
);

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.all = action.payload;
      });
  },
});

// export const {} = employeesSlice.actions;

export const selectEmployees = (state: RootState) => state.employees.all;

export default employeesSlice.reducer;
