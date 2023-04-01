//useAppSelector
//RootState

import { configureStore, combineReducers, AnyAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { appSettingsSlice } from "../logic/slices/appSettingsSlice";

const rootReducer = combineReducers({
    appSettings: appSettingsSlice.reducer,
});

const resettableRootReducer = (
    state: ReturnType<typeof rootReducer> | undefined,
    action: AnyAction
) => {
    if (action.type === "store/reset") {
        const cleanReducer = {} as ReturnType<typeof rootReducer>;
        return rootReducer(cleanReducer, action);
    }

    return rootReducer(state, action);
};

export const store = configureStore({
    reducer: resettableRootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
