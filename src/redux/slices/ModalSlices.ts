import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface modalSliceProps {
  signUpModal: boolean;
}
const initialState: modalSliceProps = {
  signUpModal: false,
};
const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setSignupModal: (state, action: PayloadAction<any>) => {
      state.signUpModal = action.payload;
    },
  },
});

export const { setSignupModal } = modalSlice.actions;

export default modalSlice.reducer;
