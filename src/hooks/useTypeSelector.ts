import { useSelector as _useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

export const useTypeSelector: TypedUseSelectorHook<RootState> = _useSelector
