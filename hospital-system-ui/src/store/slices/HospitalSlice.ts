import {HospitalModel} from "../../models/Models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface HospitalState {
    hospitals: HospitalModel[];
}

const initialState: HospitalState = {
    hospitals: []
}

const hospitalSlice = createSlice({
    name: "hospital",
    initialState,
    reducers: {
        addHospital: (state, action: PayloadAction<HospitalModel>) => {
            state.hospitals = [...state.hospitals, action.payload];
        },
        addHospitals: (state, action: PayloadAction<HospitalModel[]>) => {
            state.hospitals = action.payload;
        },
    }
})

export const {addHospital, addHospitals} = hospitalSlice.actions;
export default hospitalSlice.reducer;