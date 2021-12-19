import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { IRoute } from "../../types";
import { routes } from "../../routes";

export interface IState {
  current: IRoute;
}

const initialState: IState = {
  current: routes.home,
};

export const slice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<IRoute>) => {
      state.current = action.payload;
    },
  },
});

export const { setPage } = slice.actions;

export const selectPage = (state: RootState) => state.pages.current;

export default slice.reducer;
