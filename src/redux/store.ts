import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useDispatch, TypedUseSelectorHook } from "react-redux";
import ModalSlices from "./slices/ModalSlices";

export const store = configureStore({
  reducer: { modal: ModalSlices },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
