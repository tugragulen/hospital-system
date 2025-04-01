import React, {useEffect} from 'react';
import {getHospitals} from "../api/ApiService";
import {useDispatch} from "react-redux";
import {addHospitals} from "./slices/HospitalSlice";

const Init = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        loadHospitals();
    }, []);

    const loadHospitals = () => {
        getHospitals()
            .then((response) => dispatch(addHospitals(response)))
            .catch(err => console.error("Hastaneler yüklenemedi", err));
    }

    return (
        <>
        </>
    );
};

export default Init;