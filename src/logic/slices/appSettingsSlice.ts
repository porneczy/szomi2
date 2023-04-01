import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBrowserLang, Language } from "../langHandle";
import { RootState } from "../store";

type appSettingsType = {
    appLang: Language;
};

const initialState: appSettingsType = {
    appLang: getBrowserLang(),
};

export const appSettingsSlice = createSlice({
    name: "appSettings",
    initialState,
    reducers: {
        setLang(state, action: PayloadAction<{ lang: Language }>) {
            state.appLang = action.payload.lang || "en";
        },
    },
});

export const { setLang } = appSettingsSlice.actions;
export const getAppLang = (state: RootState): Language =>
    state.appSettings.appLang;
