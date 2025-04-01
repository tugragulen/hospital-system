import {HospitalModel} from "../../models/Models";
import {createSlice} from "@reduxjs/toolkit";

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
        addHospital: (state, action) => {
            state.hospitals = [...state.hospitals, action.payload];
        },
        addHospitals: (state, action) => {
            console.log("hastaneler getttt")
            state.hospitals = action.payload;
        },
    }
})

export const {addHospital, addHospitals} = hospitalSlice.actions;
export default hospitalSlice.reducer;