import {configureStore} from "@reduxjs/toolkit";
import hospitalSlice from "./slices/HospitalSlice";


export const store = configureStore({
    reducer: {
        hospital: hospitalSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
