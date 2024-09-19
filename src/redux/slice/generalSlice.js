import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeColor: "pink",
  darkTheme: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    updateThemeColor(state, action) {
      state.themeColor = action.payload;
    },
    switchTheme(state) {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { updateThemeColor, switchTheme } = generalSlice.actions;
export default generalSlice.reducer;
