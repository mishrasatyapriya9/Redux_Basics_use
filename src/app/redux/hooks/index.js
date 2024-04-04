import { useDispatch, useSelector } from "react-redux";
import store from "../store"; // Assuming store.js exports the Redux store instance

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
