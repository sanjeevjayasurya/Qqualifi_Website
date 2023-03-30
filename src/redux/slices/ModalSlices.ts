import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface modalSliceProps {
  signUpModal: boolean;
  createInstitueModal: boolean;
  signInModal: boolean;
  otpModal: boolean;
}
const initialState: modalSliceProps = {
  signUpModal: false,
  createInstitueModal: false,
  signInModal: false,
  otpModal: false,
};
const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setSignupModal: (state, action: PayloadAction<boolean>) => {
      state.signUpModal = action.payload;
    },
    setCreateInstitueModal: (state, action: PayloadAction<boolean>) => {
      state.createInstitueModal = action.payload;
    },
    setSignInModal: (state, action: PayloadAction<boolean>) => {
      state.signInModal = action.payload;
    },
    setOtpModal: (state, action: PayloadAction<boolean>) => {
      state.otpModal = action.payload;
    },
  },
});

export const {
  setSignupModal,
  setCreateInstitueModal,
  setSignInModal,
  setOtpModal,
} = modalSlice.actions;

export default modalSlice.reducer;
