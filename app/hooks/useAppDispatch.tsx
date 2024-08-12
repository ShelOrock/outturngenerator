import { useDispatch } from "react-redux";

import { AppDispatchType } from "../types/redux";

const useAppDispatch: () => AppDispatchType = useDispatch;

export default useAppDispatch;
