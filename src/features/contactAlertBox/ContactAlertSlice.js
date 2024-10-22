import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

export const contactAlertSlice = createSlice({
  name: "contactAlertSlice",
  initialState,
  reducers: {
    open: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.status = true;
    },
    close: (state) => {
      state.status = false;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { open, close } = contactAlertSlice.actions;

export default contactAlertSlice.reducer;
