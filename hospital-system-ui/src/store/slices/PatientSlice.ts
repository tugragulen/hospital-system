import {PatientModel} from "../../models/Models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PatientState {
    patients: PatientModel[];
}

const initialState: PatientState = {
    patients: []
}

const patientSlice = createSlice({
    name: "patient",
    initialState,
    reducers: {
        addPatient: (state, action: PayloadAction<PatientModel>) => {
            state.patients = [...state.patients, action.payload];
        },
        addPatients: (state, action: PayloadAction<PatientModel[]>) => {
            state.patients = action.payload;
        },
    }
})

export const {addPatient, addPatients} = patientSlice.actions;
export default patientSlice.reducer;