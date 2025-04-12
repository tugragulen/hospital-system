import {PatientModel} from "../../models/Models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PatientState {
    patients: PatientModel[];
    selectedPatient?: PatientModel;
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
        updatePatient: (state, action: PayloadAction<PatientModel>) => {
            const index = state.patients.findIndex(patient => patient.id === action.payload.id);
            if (index !== -1) {
                state.patients[index] = action.payload;
            } else {
                console.error("Güncellenecek hasta kaydı bulunamadı")
            }
        },
        setSelectedPatient: (state, action: PayloadAction<PatientModel>) => {
            state.selectedPatient = action.payload;
        },
        resetSelectedPatient: (state) => {
            state.selectedPatient = undefined;
        },
        removePatient: (state, action: PayloadAction<string>) => {
            state.patients = state.patients.filter(patient => patient.id !== action.payload);
        }

    }
})

export const {
    addPatient,
    addPatients,
    setSelectedPatient,
    resetSelectedPatient,
    updatePatient,
    removePatient
} = patientSlice.actions;
export default patientSlice.reducer;