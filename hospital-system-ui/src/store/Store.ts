import {configureStore} from "@reduxjs/toolkit";
import HospitalSlice from "./slices/HospitalSlice";
import PatientSlice from "./slices/PatientSlice";


export const store = configureStore({
    reducer: {
        hospital: HospitalSlice,
        patient: PatientSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
