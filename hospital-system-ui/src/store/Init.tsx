import React, {useEffect} from 'react';
import {getHospitals, getPatients} from "../api/ApiService";
import {useDispatch} from "react-redux";
import {addHospitals} from "./slices/HospitalSlice";
import {addPatients} from "./slices/PatientSlice";

const Init = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        loadHospitals();
        loadPatients();
    }, []);

    const loadHospitals = () => {
        getHospitals()
            .then((response) => dispatch(addHospitals(response)))
            .catch(err => console.error("Hastaneler yüklenemedi", err));
    }

    const loadPatients = () => {
        getPatients()
            .then(response => dispatch(addPatients(response)))
            .catch(err => console.error("Hasta kayıtları yüklenemedi", err))
    }

    return (
        <>
        </>
    );
};

export default Init;